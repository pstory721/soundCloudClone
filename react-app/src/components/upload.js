import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";
import { UploadASong } from "../store/song";
import './upload.css'


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
        <div className='upload'>
        <form className="SongForm" onSubmit={handleSubmit}>
            <div className='inner'>

            <label className="noteForms">
                <input
                    className='input'
                    id='title'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                /><br></br>
                <input
                className='input'
                    id='artist'
                    type="text"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    placeholder="Artist name"
                    required
                /><br></br>
                <input
                className='input'
                    id='length'
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    placeholder="Track Length"
                    required
                /><br></br>
                <input type="file" name="song" onChange={changeHandler} />
			    {isSongPicked ? (
				    <div className='picked'>
					    {/* <p>Filename: {selectedSong.name}</p> */}
					    {/* <p>Filetype: {selectedSong.type}</p>
					    <p>Size in bytes: {selectedSong.size}</p>
					    <p>
						    lastModifiedDate:{' '}
						    {selectedSong.lastModifiedDate.toLocaleDateString()}
					    </p> */}
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
            <button id="submit" type="submit" >Submit</button>
            </div>
        </form>
        </div>
    )
}


export default UploadForm;
