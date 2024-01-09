import { useState, useRef, useEffect } from "react";

const AudioControl = ({ src }) =>
{
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(1); // 1 es el máximo, 0 es el mínimo
    const audioRef = useRef(new Audio(src));

    const toggleMusic = () =>
    {
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlaying(!playing);
    };

    const changeVolume = (e) =>
    {
        const newVolume = e.target.value;
        audioRef.current.volume = newVolume;
        setVolume(newVolume);
    };

    useEffect(() =>
    {
        audioRef.current.play();
        return () =>
        {
            audioRef.current.pause();
        };
    }, []);

    return (
        <main>
            <div>
                <button onClick={toggleMusic} className="z-10 ">
                    {playing ? ' ⏹️ ' : ' ▶️ '}
                </button>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={changeVolume}
                    className=" h-3 ml-2.5  "
                />
                🔊
            </div>
        </main>
    );
};

export default AudioControl;
