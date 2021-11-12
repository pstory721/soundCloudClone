import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";
import { UploadASong } from "../store/song";


function UploadForm({}) {
    const dispatch = useDispatch()
    const [title,setTitle] = useState("");
    const [artist,setArtist] = useState("")
    const [length,setLength] = useState(0)
    const [selectedSong, setSelectedSong] = useState();
    const [selectedImage, setSelectedImage] = useState();
	const [isSongPicked, setIsSongPicked] = useState(false);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const history = useHistory()

    const changeHandler = (event) => {
        setSelectedSong(event.target.files[0]);
		setIsSongPicked(true);
	};

    const changeHandler2 = (event) => {

		setSelectedImage(event.target.files[0]);
        setIsFilePicked(true)
	};

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = { title, artist, length }

        let newSong = await dispatch(UploadASong(payload, selectedSong, selectedImage))

        if(newSong){
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
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    placeholder="Artist name"
                    required
                />
                <input
                    id='length'
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    placeholder="Track Length"
                    required
                />
                <input type="file" name="song" onChange={changeHandler} />
			    {isSongPicked ? (
				    <div>
					    <p>Filename: {selectedSong.name}</p>
					    <p>Filetype: {selectedSong.type}</p>
					    <p>Size in bytes: {selectedSong.size}</p>
					    <p>
						    lastModifiedDate:{' '}
						    {selectedSong.lastModifiedDate.toLocaleDateString()}
					    </p>
				    </div>
			    ) : (
				    <p>Select a file to show details</p>
			    )}
                <input type="file" name="image" onChange={changeHandler2} />
			    {isFilePicked ? (
				    <p>Image selected</p>
			    ) : (
				    <p>Select a file to show details</p>
			    )}
            </label>
            <button id="submit" type="submit">Submit</button>
        </form>
    )
}


export default UploadForm;
