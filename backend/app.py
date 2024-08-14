from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config
from create_app import create_app, db, socketio

app = create_app()

if __name__ == "__main__":
    # app.run(debug=True)
    socketio.run(app, debug=True)
