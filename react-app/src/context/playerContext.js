import {createContext, useContext, useState} from 'react';
export const PlayerContext = createContext();
export const usePlayer = ()=> useContext(PlayerContext);



export default function PlayerProvider({children}){
    const [src, setSrc] = useState('');

    return (
        <PlayerContext.Provider
        value = {{src, setSrc}}
        >
            {children}
        </PlayerContext.Provider>
    )

}
