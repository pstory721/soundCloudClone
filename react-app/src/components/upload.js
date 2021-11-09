import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";


function UploadForm({}) {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();

        let newNote = dispatch(notesAction.writeNote({ noteBookId, title, contents}))
        if(newNote){
            history.push(`/`)
        }
    }

    return (
        <form className="SongForm" onSubmit={handleSubmit}>
            <label className="noteForms">
                <input
                    id='title'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <input
                    id='artist'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Artist name"
                    required
                />
                <input
                    id='title'
                    type="number"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Track Length"
                    required
                />
                <input type="file" name="Song" onChange={changeHandler} />
                <input type="file" name="Image" onChange={changeHandler} />
            </label>
            <button id="submit" type="submit">Submit</button>
        </form>
    )
}


export default UploadForm;
