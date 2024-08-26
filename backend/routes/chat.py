# from flask import Blueprint, request, jsonify
# from models.models import Message, Group, User, UserGroup
# from create_app import db, socketio
# from flask_socketio import emit, join_room, leave_room

# bp = Blueprint("chat", __name__, url_prefix="/api/chat")


# @bp.route("<int:group_id>/messages", methods=["GET"])
# def get_messages(group_id):
#     try:
#         messages = (
#             Message.query.filter_by(group_id=group_id).order_by(Message.timestamp).all()
#         )

#         # if not messages:
#         #     return jsonify({"message": "No messages sent"})

#         return (
#             jsonify(
#                 [
#                     {
#                         "id": message.id,
#                         "content": message.content,
#                         "timestamp": message.timestamp.isoformat(),
#                         "user_id": message.user_id,
#                         "username": message.user.username,
#                     }
#                     for message in messages
#                 ]
#             ),
#             200,
#         )
#     except Exception as e:
#         return jsonify({"message": f"An error occurred: {str(e)}"}), 500


# @bp.route("/<int:group_id>/messages", methods=["POST"])
# def create_message(group_id):
#     data = request.json
#     try:
#         # Check if the user is a member of the group
#         user_groups = UserGroup.query.filter_by(group_id=group_id).all()
#         user = User.query.get(data["user_id"])
#         user_id = user.id

#         members = [user_group.user_id for user_group in user_groups]

#         if user_id not in members:
#             return jsonify({"message": "You are not a member of this group"}), 403

#         new_message = Message(
#             content=data["content"], user_id=data["user_id"], group_id=group_id
#         )
#         db.session.add(new_message)
#         db.session.commit()

#         # Emit the message to all users in the group
#         socketio.emit(
#             "new_message",
#             {
#                 "id": new_message.id,
#                 "content": new_message.content,
#                 "timestamp": new_message.timestamp.isoformat(),
#                 "user_id": new_message.user_id,
#                 "username": user.username,
#             },
#             room=f"group_{group_id}",
#         )

#         return jsonify({"message": "Message sent successfully"}), 201
#     except Exception as e:
#         db.session.rollback()
#         return jsonify({"message": f"An error occurred: {str(e)}"}), 500


# # SocketIO event handlers
# @socketio.on("join")
# def on_join(data):
#     username = data["username"]
#     room = data["room"]
#     join_room(room)
#     emit("status", f"{username} has entered the room.", room=room)


# @socketio.on("leave")
# def on_leave(data):
#     username = data["username"]
#     room = data["room"]
#     leave_room(room)
#     emit("status", f"{username} has left the room.", room=room)


from flask import Blueprint, request, jsonify
from models.models import Message, Group, User, UserGroup
from create_app import db, socketio
from flask_socketio import emit, join_room, leave_room

bp = Blueprint("chat", __name__, url_prefix="/api/chat")


@bp.route("<int:group_id>/messages", methods=["GET"])
def get_messages(group_id):
    try:
        page = request.args.get("page", 1, type=int)
        per_page = request.args.get("per_page", 20, type=int)

        messages = (
            Message.query.filter_by(group_id=group_id)
            .order_by(Message.timestamp)
            .paginate(page, per_page, False)
        )

        return (
            jsonify(
                {
                    "messages": [
                        {
                            "id": message.id,
                            "content": message.content,
                            "timestamp": message.timestamp.isoformat(),
                            "user_id": message.user_id,
                            "username": message.user.username,
                        }
                        for message in messages.items
                    ],
                    "total": messages.total,
                    "page": messages.page,
                    "pages": messages.pages,
                }
            ),
            200,
        )
    except Exception as e:
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500


@bp.route("/<int:group_id>/messages", methods=["POST"])
def create_message(group_id):
    data = request.json
    try:
        user = User.query.get(data["user_id"])
        if not user:
            return jsonify({"message": "User not found"}), 404

        members = [
            user_group.user_id
            for user_group in UserGroup.query.filter_by(group_id=group_id).all()
        ]
        if user.id not in members:
            return jsonify({"message": "You are not a member of this group"}), 403

        new_message = Message(
            content=data["content"], user_id=user.id, group_id=group_id
        )
        db.session.add(new_message)
        db.session.commit()

        socketio.emit(
            "new_message",
            {
                "id": new_message.id,
                "content": new_message.content,
                "timestamp": new_message.timestamp.isoformat(),
                "user_id": new_message.user_id,
                "username": user.username,
            },
            room=f"group_{group_id}",
        )

        return jsonify({"message": "Message sent successfully"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500


@socketio.on("join")
def on_join(data):
    username = data["username"]
    room = f"group_{data['room']}"
    join_room(room)
    emit("status", f"{username} has entered the room.", room=room)


@socketio.on("leave")
def on_leave(data):
    username = data["username"]
    room = f"group_{data['room']}"
    leave_room(room)
    emit("status", f"{username} has left the room.", room=room)


@socketio.on("disconnect")
def handle_disconnect():
    print("Client disconnected")
    # Implement cleanup if needed
