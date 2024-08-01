from flask import Blueprint, request, jsonify
from models.models import User, Group, UserGroup, Invitations
from create_app import db
from sqlalchemy.exc import IntegrityError

import string
import random

bp = Blueprint("groups", __name__, url_prefix="/api/groups")


@bp.route("/", methods=["POST"])
def create_group():
    data = request.json
    new_group = Group(
        name=data["name"],
        description=data["description"],
        is_private=data["is_private"],
        admin_id=data["admin_id"],
    )

    try:
        db.session.add(new_group)
        db.session.commit()
        return (
            jsonify(
                {"message": "Group created successfully", "group_id": new_group.id}
            ),
            201,
        )
    except IntegrityError:
        db.session.rollback()
        return jsonify({"message": "Group with the same name already exists"}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500


@bp.route("/<int:group_id>/invite", methods=["POST"])
def invite(group_id):
    characters = string.ascii_letters + string.digits
    invite_code = "".join(random.choice(characters) for _ in range(6))

    data = request.json
    user_id = data["user_id"]

    try:
        group = Group.query.filter_by(id=group_id).first()
        if group is None:
            return jsonify({"message": "Group not found"}), 404

        invitation = Invitations(
            user_id=user_id, group_id=group_id, invitation_code=invite_code
        )

        db.session.add(invitation)
        db.session.commit()

        return (
            jsonify([{"group_name": group.name, "invite_code": invite_code}]),
            200,
        )
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500


@bp.route("/<int:group_id>/join", methods=["POST"])
def join_group(group_id):
    data = request.json
    group = Group.query.get(group_id)

    user_id = data["user_id"]
    user = User.query.get(user_id)

    if not user:
        return jsonify({"message": "User not found"}), 404
    if not group:
        return jsonify({"message": "Group not found"}), 404

    try:
        new_member = UserGroup(user_id=user_id, group_id=group_id)
        db.session.add(new_member)
        db.session.commit()
        return jsonify({"message": "Joined group successfully"}), 200
    except IntegrityError:
        db.session.rollback()
        return jsonify({"message": "User already in the group"}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500


@bp.route("/join", methods=["POST"])
def join_group_with_invite():
    data = request.json
    user_id = data["user_id"]
    invite_code = data["invite_code"]

    invitation = Invitations.query.filter_by(invitation_code=invite_code).first()

    group_id = invitation.group_id
    group = Group.query.filter_by(id=group_id).first()
    user = User.query.get(user_id)

    if not user:
        return jsonify({"message": "User not found"}), 404

    if invitation is None:
        return jsonify({"message": "Invitation not found"}), 404

    try:
        new_member = UserGroup(user_id=user_id, group_id=group_id)
        db.session.add(new_member)
        db.session.commit()
        return jsonify({"message": "Joined group successfully"}), 200
    except IntegrityError:
        db.session.rollback()
        return jsonify({"message": "User already in the group"}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500


@bp.route("/", methods=["GET"])
def get_all_groups():
    try:
        groups = Group.query.all()
        return (
            jsonify(
                [
                    {
                        "group_id": group.id,
                        "name": group.name,
                        "description": group.description,
                        "admin_id": group.admin_id,
                    }
                    for group in groups
                ]
            ),
            200,
        )
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500


@bp.route("/<int:group_id>", methods=["GET"])
def get_group_by_id(group_id):
    try:
        group = Group.query.filter_by(id=group_id).first()
        if group is None:
            return jsonify({"message": "Group not found"}), 404

        return (
            jsonify([{"name": group.name, "description": group.description}]),
            200,
        )
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500


@bp.route("/<int:group_id>", methods=["PUT"])
def edit_group(group_id):
    try:
        group = Group.query.filter_by(id=group_id).first()
        if group is None:
            return jsonify({"message": "Group not found"}), 404

        data = request.json
        group.name = data.get("name", group.name)
        group.description = data.get("description", group.description)

        db.session.commit()
        return jsonify({"message": "Group updated successfully"}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500


@bp.route("/<int:group_id>", methods=["DELETE"])
def delete_group(group_id):
    try:
        group = Group.query.filter_by(id=group_id).first()
        if group is None:
            return jsonify({"message": "Group not found"}), 404

        db.session.delete(group)
        db.session.commit()
        return jsonify({"message": "Group deleted successfully"}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500
