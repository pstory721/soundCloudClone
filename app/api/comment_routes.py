from flask import Blueprint, jsonify, redirect
from flask_login import login_required, current_user
from app.models import Comments, db
from app.forms.comment_form import CommentForm

comment_routes = Blueprint('comments', __name__)


# Posts a new comment to the song
@comment_routes.route("/add",methods=["POST"])
@login_required
def post_comment():
    form = CommentForm()
    user = current_user.id
    if form.validate_on_submit():
        data = form.data
        new_comment = Comments(
            user_id = user,
            content = data["content"]
        )
        db.session.add(new_comment)
        db.session.commit()
        return redirect("/")
    else:
        return "Bad Data"


# Delete's a comment made by the user
@comment_routes.route('/<int:id>',methods=["DELETE"])
@login_required
def delete_comment(id):
    current_comment = Comments[id]
    if current_comment["user_id"] not in current_user:
        return "Cannot complete request", 403
    db.session.delete(current_comment)
    return redirect("/")


# Edit comment made by the user
@comment_routes.route('/<int:id>',methods=["PUT"])
@login_required
def edit_comment(id):
    
    return redirect("/")
