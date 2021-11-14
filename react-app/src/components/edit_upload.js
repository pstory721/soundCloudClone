import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import {UpdateASong} from "../store/song"

export function UpdateForm({id}) {
    const dispatch = useDispatch()
    const [title,setTitle] = useState("");
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = { title}
        let newSong = await dispatch(UpdateASong(payload,id))

        if(newSong){
            history.push(`/`)
        }
    }

    return (
        <div>
        <form className="SongForm" onSubmit={handleSubmit}>
            <label className="noteForms">
                <input
                    id='title'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="New Title"
                    required
                />
                 </label>
            <button id="submit" type="submit">Change Title</button>
        </form>
        </div>
    )
}
