import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Redirect  } from "react-router-dom";
import { DeleteASong, GetOneSong } from "../store/song";
import {UpdateForm} from './edit_upload';
import { EditDelete2 } from "./edit-delete";
import CommentForm from './comment.js'
import {usePlayer} from '../context/playerContext';
import { DeleteAComment, GetAllComments } from "../store/Comments";

import './song-page.css';

import EditForm from "./edit_comment";


export function SongPage() {
  const {leSong, setLeSong} = usePlayer();
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  const sessionUser = useSelector((state) => state.session.user);
  const singleSong = useSelector((state) => state.songs.singleSong);
  const allComments = useSelector((state) => state.comment.comments)

  console.log(singleSong)

  const handleDelete = (e)=> {
    // e.preventDefault();
    dispatch(DeleteASong(id))
      history.push(`/discover`)
  }

  let userCheck;
  if (sessionUser.id === singleSong?.user_id) {
    userCheck = <button
    id="splashlinkbuttons"
    onClick={() => {
      handleDelete()
    }}
  >
    Delete Song
  </button>
  }
  let otherCheck;
  if (sessionUser.id === singleSong?.user_id) {
    otherCheck = <UpdateForm id={singleSong.id}/>
  }

  const [showForm, setShowForm] = useState(false);



  useEffect(() => {
    dispatch(GetOneSong(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetAllComments(id));
  }, [dispatch]);


  return (
    <div className='song-page'>
        <div className='solo-song'>
            <img src={singleSong.image_url} width='200px' height='200px' alt='art'></img><br></br>
        </div>
          <div>
            <h1 className='song-title'>{singleSong.title}</h1>
            {userCheck}
            {otherCheck}
            <CommentForm song_id={id}/>
        </div>
          <div className='new-song-bttn'>
          <div className='songs-bttns' >
            <button className='song-bttn' onClick={()=> setLeSong(singleSong.song_url)}><img className='play-bttn' src="https://res.cloudinary.com/dzjkwepju/image/upload/v1639445654/Styckr/Untitled_design_26_mgyaki.png" alt='play'></img> </button>
          </div>
          </div>
        <div>
          {allComments?.map((comment) =>
            <div className='comment-stuff'>
              {/* <p>{comment.user_id}</p> */}
              <p className="the-comment">{comment.content}</p>
              <button className='x' id="splashlinkbuttons" onClick={() => {
                dispatch(DeleteAComment(comment.id))
                history.push(`/song-page/${singleSong.id}`)
                }}>
                X
              </button>
              <button className='e' onClick={() => showForm === false ? setShowForm(true) : setShowForm(false)} id="splashlinkbuttons">
                Edit
              </button>
          {showForm && (<EditForm id={comment.id} />)}
        </div>)}
        </div>
    </div>
  )}
