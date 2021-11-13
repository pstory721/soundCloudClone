import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import {UpdateAComment} from "../store/Comments"

function EditForm({comment_id}){
    const dispatch = useDispatch();
    const id  = useParams();
    const history = useHistory();
    const [content, setContent] = useState("")
    let item = parseInt(id.comment_id)

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { content }
        let newNote = dispatch(UpdateAComment(payload,id))
        if(newNote){
            history.push(`/`)
        }
    }

    return (
        <form className="CommentForm" onSubmit={handleSubmit}>
            <label className="noteForms">
            <textarea
                    id='comment'
                    type="textarea"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Your Comment here"
            />
            </label>
            <button id="submit" type="submit">Submit</button>
        </form>
    )
}

export default EditForm;
