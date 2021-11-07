from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

comment_routes = Blueprint('comments', __name__)
