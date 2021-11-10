import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";
import { AddAComment } from "../store/Comments";


function CommentForm({}) {
    const dispatch = useDispatch()
    const [content, setContent] = useState("")
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();

        let newNote = dispatch(AddAComment({ content }))
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


export default CommentForm;
