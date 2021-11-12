import AudioPlayer from 'react-h5-audio-player';
import './player.css';
import {usePlayer} from '../context/playerContext';

// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS


function Player(){
    const {leSong, setLeSong} = usePlayer();
    

    return (
    <div className='player-div'>
    <div id="player">
        <AudioPlayer
        autoPlay
        src={leSong}
        onPlay={e => console.log("onPlay")}
        showSkipControls={true}
        />
    </div>
    </div>
    )
};

export default Player;


//rhap_container
