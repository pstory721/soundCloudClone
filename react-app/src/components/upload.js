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


    let the_song;
    let the_image;
    const changeHandler = (event) => {
        setSelectedSong(event.target.files[0]);
		setIsSongPicked(true);
	};

    const changeHandler2 = (event) => {
        console.log(event.target.files)
        console.log(event.target.files[0])
        console.log(event.target.files[1])
		setSelectedImage(event.target.files[0]);
        setIsFilePicked(true)
	};

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = { title, artist, length }
        console.log("PAYLOAD",payload)
        let newSong = await dispatch(UploadASong(payload, selectedSong, selectedImage))

        if(newSong){
            history.push(`/discover`)
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
