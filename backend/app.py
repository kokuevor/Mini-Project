from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)

from models import *
from routes import auth, groups, messages, tasks, events, files, calls

app.register_blueprint(auth.bp)
app.register_blueprint(groups.bp)
app.register_blueprint(messages.bp)
app.register_blueprint(tasks.bp)
app.register_blueprint(events.bp)
app.register_blueprint(files.bp)
app.register_blueprint(calls.bp)


if __name__ == "__main__":
    app.run(debug=True)
