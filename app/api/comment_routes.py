from flask import Blueprint, jsonify, redirect
from flask_login import login_required, current_user
from app.models import Comments, db
from app.forms.comment_form import CommentForm

comment_routes = Blueprint('comments', __name__)

@comment_routes.route("/comments",methods=["POST"])
@login_required
def post_comment():
    form = CommentForm()
    if form.validate_on_submit():
        data = form.data
        new_comment = Comments(
            content = data["content"]
        )
        db.session.add(new_comment)
        db.session.commit()
        return redirect("/")
    else:
        return "Bad Data"

@comment_routes.route('/comments/:id',methods=["DELETE"])
@login_required
def delete_comment():
    Comments.query.filter(Comments.id == id).delete()
