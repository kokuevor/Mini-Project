from flask import Blueprint, request, jsonify
from models.models import Group
from create_app import db

bp = Blueprint("groups", __name__, url_prefix="/groups")


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
    except Exception as e:
        db.session.rollback()
        return (
            jsonify({"message": "Group create failed", "error": str(e)}),
            500,
        )
