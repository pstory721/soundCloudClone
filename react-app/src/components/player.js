import AudioPlayer from 'react-h5-audio-player';
import './player.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

function Player(){
    return (
    <div className='player-div'>
    <div id="player">
        <AudioPlayer
        autoPlay
        src={'https://soundcloudclone.s3.amazonaws.com/59de75b50dd5495a83cab404e721a62d.mp3'}
        onPlay={e => console.log("onPlay")}
        showSkipControls={true}
        />
    </div>
    </div>
    )
};

export default Player;


//rhap_container
