import React, { useState, useEffect, useRef } from 'react';

const Player = (props) => {
    const [ currentTimes, setCurrentTimes ] = useState(0);
    const [ durationTimes, setDurationTimes ] = useState(0);
    const audioPlayer = useRef(null);
    const audioSource = useRef(null);
    const { artist, thumb, audio } = props.songValue;

    async function getCurrentTime(event) {
        const songCurrentTime = await event.target.currentTime
        const songDurationTime = await event.target.duration

        const format = (time) => {   
            var hrs = ~~(time / 3600);
            var mins = ~~((time % 3600) / 60);
            var secs = ~~time % 60;
            var ret = "";
            if (hrs > 0) ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
            ret += "" + mins + ":" + (secs < 10 ? "0" : "");
            ret += "" + secs;
            return ret;
        }

        setDurationTimes(format(songDurationTime));
        setCurrentTimes(format(songCurrentTime));
    }

    useEffect(() => {
        async function fetchSongs() {
            const response = await fetch(audio)
            const audioRef = audioPlayer.current
            const source = audioSource.current
            source.src = response.url
            audioRef.load()
        }

        fetchSongs()
        return () => {}        
    }, [ audio ])

    return(
        <article className='player'>
            <div className={'audio-player'}>
                <figure className={`figure`} style={{ backgroundImage: `url(${thumb})`}}></figure>
                <h1 className={'title'}>{artist || 'Artist'}</h1>
                <audio controls autoPlay ref={audioPlayer} onTimeUpdate={(event) => getCurrentTime(event)}>
                    <source type="audio/mpeg" ref={audioSource}/>
                </audio>
            </div>
        </article>
    )
}
export default Player;


