import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { DeleteASong, GetOneSong } from "../store/song";
import { UpdateForm } from "./edit_upload";
import { EditDelete2 } from "./edit-delete";
import CommentForm from "./comment.js";
import { usePlayer } from "../context/playerContext";
import { DeleteAComment, GetAllComments } from "../store/Comments";

import "./song-page.css";

import EditForm from "./edit_comment";
import { GetASongsLikes, GetOneUsersLikes, UploadALike,DeleteALike } from "../store/likes";

export function SongPage() {
  const { leSong, setLeSong } = usePlayer();
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  const sessionUser = useSelector((state) => state.session.user);
  const singleSong = useSelector((state) => state.songs.singleSong);
  const allComments = useSelector((state) => state.comment.comments);
  const likes = useSelector((state) => state.likes.songLikes);
  const userLikes = useSelector((state) => state.likes.songLikes);

  const handleDelete = (e) => {
    // e.preventDefault();
    dispatch(DeleteASong(id));
    history.push(`/discover`);
  };

  let userCheck;
  if (sessionUser.id === singleSong?.user_id) {
    userCheck = (
      <button
        id="splashlinkbuttons"
        onClick={() => {
          handleDelete();
        }}
      >
        Delete Song
      </button>
    );
  }
  let otherCheck;
  if (sessionUser.id === singleSong?.user_id) {
    otherCheck = <UpdateForm id={singleSong.id} />;
  }

  const [showForm, setShowForm] = useState(false);
  const [audio, setAudio] = useState();
  const [like, setLike] = useState("like");
  const [singleLike, setSingleLike] = useState();
  useEffect(() => {
    dispatch(GetOneSong(id));
    dispatch(GetAllComments(id));
    dispatch(GetASongsLikes(id));
    dispatch(GetOneUsersLikes(sessionUser.id));
  }, [dispatch]);

  useEffect(() => {
    likes?.map((like2) => {
      if (sessionUser?.id === like2?.user_id) {
        setLike("unlike");
      } else if (sessionUser?.id !== like2?.user_id) {
        setLike("like");
      }
    });
  },[like]);

  const handleAudio = () => {
    setLeSong(singleSong.song_url);
  };


  useEffect(() => {
    likes?.map((like2) => {
      if (sessionUser?.id === like2?.user_id) {
        setSingleLike(like2.id)
      }
    });
},[like]);

  let likeImg;
  likes?.map((like2) => {
  if (like === 'unlike' ){
    likeImg = <img src='https://res.cloudinary.com/dzjkwepju/image/upload/v1639785271/Styckr/Untitled_design_31_ljpu7l.png' alt='liked'></img>

  }else if (like === 'like'){
    likeImg = <img src='https://res.cloudinary.com/dzjkwepju/image/upload/v1639785238/Styckr/Untitled_design_30_aabiyy.png' alt='unliked'></img>
  } });



  return (
    <div className="song-page">
      <div className="solo-song">
        <img
          src={singleSong.image_url}
          width="200px"
          height="200px"
          alt="art"
        ></img>
        <br></br>
      </div>
      <div>
        <h1 className="song-title">{singleSong.title}</h1>
        {userCheck}
        {otherCheck}
        <button onClick={() => like==="like"?dispatch(UploadALike(id, like)): dispatch(DeleteALike(id,like,singleLike))}></button>
        <h1 className='like-count'>{likes.length}</h1>
        <CommentForm song_id={id} />
      </div>
      <div className="new-song-bttn">
        <div className="songs-bttns">
          <button className="song-bttn" onClick={() => handleAudio()}>
            <img
              className="play-bttn"
              src="https://res.cloudinary.com/dzjkwepju/image/upload/v1639445654/Styckr/Untitled_design_26_mgyaki.png"
              alt="play"
            ></img>{" "}
          </button>
        </div>
      </div>
      <div>
        {allComments?.map((comment) => (
          <div className="comment-stuff">
            {/* <p>{comment.user_id}</p> */}
            <p className="the-comment">{comment.content}</p>
            <button
              className="x"
              id="splashlinkbuttons"
              onClick={() => {
                dispatch(DeleteAComment(comment.id));
                history.push(`/song-page/${singleSong.id}`);
              }}
            >
              X
            </button>
            <button
              className="e"
              onClick={() =>
                showForm === false ? setShowForm(true) : setShowForm(false)
              }
              id="splashlinkbuttons"
            >
              Edit
            </button>
            {showForm && <EditForm id={comment.id} />}
          </div>
        ))}
      </div>
    </div>
  );
}
