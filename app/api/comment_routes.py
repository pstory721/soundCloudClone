from flask import Blueprint, jsonify, redirect
from flask_login import login_required, current_user
from app.models import Comments, db
from app.forms.comment_form import CommentForm

comment_routes = Blueprint('comments', __name__)


# Posts a new comment to the song
@comment_routes.route("/comments",methods=["POST"])
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
@comment_routes.route('/comments/:id',methods=["DELETE"])
@login_required
def delete_comment():
    current_comment = Commnets["id"]
    if current_comment["user_id"] not current_user.id:
        return "Cannot complete request", 403
    db.session.delete(current_comment)
    return redirect("/")
