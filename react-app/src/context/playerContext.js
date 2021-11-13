import {createContext, useContext, useState} from 'react';
export const PlayerContext = createContext();
export const usePlayer = ()=> useContext(PlayerContext);



export default function PlayerProvider({children}){
    const [leSong, setLeSong] = useState('');

    return (
        <PlayerContext.Provider
        value = {{leSong, setLeSong}}
        >
            {children}
        </PlayerContext.Provider>
    )

}
