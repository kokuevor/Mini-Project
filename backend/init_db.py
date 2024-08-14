from app import app
from create_app import db
from flask_migrate import Migrate

migrate = Migrate()


def init_db():
    with app.app_context():
        db.create_all()
        migrate.init_app(app, db)


if __name__ == "__main__":
    init_db()
    print("Database initialized.")
