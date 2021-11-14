import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import {UpdateAComment} from "../store/Comments"

function EditForm({id}){
    const dispatch = useDispatch();
    const history = useHistory();
    const songId = useParams();
    const [content, setContent] = useState("")
    console.log(songId)

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { content}
        dispatch(UpdateAComment(payload, id))

        history.push(`/song-page/${songId.id}`);
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
