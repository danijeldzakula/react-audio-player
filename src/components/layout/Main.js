import React, { useCallback, useState } from 'react';
import Player from '../player/Player';
import Sidebar from '../sidebar/Sidebar';

const Main = (props) => {
    const [ activeSong, setActiveSong ] = useState(false);
    const [ songValue, setSongValue ] = useState([]);

    const handleClick = useCallback((data) => {
        setSongValue(data);
        setActiveSong(true);
    }, []);

    return (
        <main className='main'>
            <Player database={props.database} 
                    songValue={songValue} />
                    
            <Sidebar database={props.database} 
                    activeSong={activeSong} 
                    songValue={songValue.id} 
                    handleClick={handleClick} />
        </main>
    )
}

export default Main;