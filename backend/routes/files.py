from flask import Blueprint, request, jsonify, send_file
from create_app import create_app, db
import boto3
from models.models import File
from werkzeug.utils import secure_filename
from botocore.exceptions import ClientError, NoCredentialsError
import os
from dotenv import load_dotenv

bp = Blueprint("files", __name__, url_prefix="/api/groups")

load_dotenv()

# Configure AWS S3 client
try:
    s3 = boto3.client(
        "s3",
        aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
        aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"),
        region_name=os.getenv("AWS_DEFAULT_REGION"),
    )
except NoCredentialsError:
    print(
        "AWS credentials not found. Please set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environment variables."
    )
    s3 = None

BUCKET_NAME = os.getenv("BUCKET_NAME")
if not BUCKET_NAME:
    print(
        "S3 bucket name not found. Please set the S3_BUCKET_NAME environment variable."
    )


@bp.route("/<int:group_id>/files/upload", methods=["POST"])
def upload_file(group_id):
    if not s3 or not BUCKET_NAME:
        return jsonify({"error": "S3 configuration is incomplete"}), 500

    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    try:
        user_id = request.form.get("user_id")
        if not user_id:
            return jsonify({"message": "User ID is required"}), 400

        new_file = File(
            group_id=group_id,
            user_id=user_id,
            file_name=file.filename,
            file_path=f"{group_id}/{file.filename}",
        )
        db.session.add(new_file)
        db.session.commit()

        s3.upload_fileobj(file, BUCKET_NAME, f"{group_id}/{file.filename}")
        return jsonify({"message": "File uploaded successfully"}), 200
    except ClientError as e:
        return jsonify({"error": str(e)}), 500


@bp.route("/<int:group_id>/files/download/<filename>", methods=["GET"])
def download_file(group_id, filename):
    if not s3 or not BUCKET_NAME:
        return jsonify({"error": "S3 configuration is incomplete"}), 500

    try:
        file_path = f"{group_id}/{filename}"
        file = s3.get_object(Bucket=BUCKET_NAME, Key=file_path)
        return send_file(file["Body"], as_attachment=True, download_name=filename)
    except ClientError as e:
        return jsonify({"error": str(e)}), 404


@bp.route("/<int:group_id>/files/", methods=["GET"])
def list_files(group_id):
    if not s3 or not BUCKET_NAME:
        return jsonify({"error": "S3 configuration is incomplete"}), 500

    try:
        prefix = f"{group_id}/"
        response = s3.list_objects_v2(Bucket=BUCKET_NAME, Prefix=prefix)
        files = [obj["Key"].split("/", 1)[1] for obj in response.get("Contents", [])]
        if len(files) == 0:
            return jsonify({"message": "No files in the group"}), 200

        return jsonify({"files": files}), 200
    except ClientError as e:
        return jsonify({"error": str(e)}), 500


@bp.route("/<int:group_id>/files/download/<filename>", methods=["DELETE"])
def delete_file(group_id, filename):
    if not s3 or not BUCKET_NAME:
        return jsonify({"error": "S3 configuration is incomplete"}), 500

    try:
        file_path = f"{group_id}/{filename}"
        s3.delete_object(Bucket=BUCKET_NAME, Key=file_path)
        return jsonify({"message": "File deleted successfully"}), 200
    except ClientError as e:
        return jsonify({"error": str(e)}), 500
