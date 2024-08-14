from flask import Blueprint, request, jsonify, session
from werkzeug.security import generate_password_hash, check_password_hash
from models.models import User
from create_app import db
from dotenv import load_dotenv
import os
import jwt
import uuid
import datetime

load_dotenv()

bp = Blueprint("auth", __name__, url_prefix="/api/auth")
SECRET_KEY = os.getenv("SECRET_KEY")

@bp.route("/register", methods=["POST"])
def register():
    data = request.json
    hashed_password = generate_password_hash(data["password"])
    new_user = User(
        username=data["username"], email=data["email"], password=hashed_password
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User registered successfully"}), 201


@bp.route("/login", methods=["POST"])
def login():
    data = request.json
    user = User.query.filter_by(username=data["username"]).first()
    if user and check_password_hash(user.password, data["password"]):
        exp_time = datetime.datetime.utcnow() + datetime.timedelta(hours=0.02)
        token = jwt.encode(
            {"user_id": user.id, "exp": exp_time}, SECRET_KEY, algorithm="HS256"
        )
        response = jsonify(
            {"message": "Login successful", "user_id": user.id, "authToken": token}
        )
        response.set_cookie(
            "authToken", token, httponly=True, secure=True, samesite="Strict"
        )
        return response, 200
    return jsonify({"message": "Invalid credentials"}), 401
    

@bp.route("/logout", methods=["POST"])
def logout():
    user_id = session.pop("user_id", None)
    authToken = session.pop("authToken", None)

    response = jsonify({"message": "Logout successful"})
    response.set_cookie("session", "", expires=0)
    return response, 200


# @bp.route("/profile")
# def profile():
#     if "user_id" not in session:
#         return jsonify({"message": "You are not logged in"}), 401
#     user_id = session["user_id"]
#     user = User.query.get(user_id)
#     return jsonify({"username": user.username}), 200
