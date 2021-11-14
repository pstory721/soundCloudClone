import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";
import { AddAComment } from "../store/Comments";
import { EditDelete2 } from "./edit-delete";


function CommentForm({song_id}) {
    const dispatch = useDispatch()
    const [content, setContent] = useState("")
    const history = useHistory()
    const [songId,setSongId] = useState(song_id)


    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {content, songId}
        dispatch(AddAComment(payload))

        history.push(`/song-page/${songId}`)

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


export default CommentForm;
