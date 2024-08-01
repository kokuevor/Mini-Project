from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import Config

db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)

    # CORS(app)
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

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
        from routes import auth, groups, messages, tasks, events, files, calls

        app.register_blueprint(auth.bp)
        app.register_blueprint(groups.bp)
        # app.register_blueprint(messages.bp)
        # app.register_blueprint(tasks.bp)
        # app.register_blueprint(events.bp)
        app.register_blueprint(files.bp)
        # app.register_blueprint(calls.bp)

    return app
