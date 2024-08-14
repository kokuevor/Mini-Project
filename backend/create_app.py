from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_socketio import SocketIO
from config import Config

# import os
# from dotenv import load_dotenv

# load_dotenv()
db = SQLAlchemy()
socketio = SocketIO()


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    socketio.init_app(app, cors_allowed_origins="*")

    # app.secret_key = os.getenv("SECRET_KEY")

    # CORS(app)
    CORS(app, resources={r"*": {"origins": "http://localhost:5173"}})

    with app.app_context():
        from models.models import (
            User,
            Group,
            UserGroup,
            Message,
            Task,
            Event,
            File,
            CallLog,
            Invitations,
        )
        from routes import auth, groups, chat, tasks, events, files, calls

        app.register_blueprint(auth.bp)
        app.register_blueprint(groups.bp)
        app.register_blueprint(chat.bp)
        # app.register_blueprint(tasks.bp)
        # app.register_blueprint(events.bp)
        app.register_blueprint(files.bp)
        # app.register_blueprint(calls.bp)

    return app
