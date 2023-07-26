import { useState, useRef } from 'react';
import Gif from "../../assets/imgs/Logo.png";
import audioFile from '../../assets/music/music.mp3';

function playMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="grid grid-cols-2 w-[100px] shadow-xl">
      <div className="flex w-full bg-black rounded-l-[4px] items-center justify-center">
        <img src={Gif} alt="" />
      </div>
      <div className="flex w-full bg-pink35 rounded-r-[4px] items-center justify-center">
        <div className="flex flex-col items-center cursor-pointer" onClick={togglePlay}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12V18.967C3 21.277 5.534 22.736 7.597 21.615L10.8 19.873M3 8V5.033C3 2.723 5.534 1.264 7.597 2.385L20.409 9.353C20.8893 9.60841 21.291 9.98969 21.5712 10.456C21.8514 10.9223 21.9994 11.456 21.9994 12C21.9994 12.544 21.8514 13.0777 21.5712 13.544C21.291 14.0103 20.8893 14.3916 20.409 14.647L14.003 18.131"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <audio ref={audioRef} src={audioFile} controls={true} autoPlay={false} className='hidden'/>
          <p className="text-xs font-ceraMedium text-white">{isPlaying ? 'Pause' : 'Play'}</p>
        </div>
      </div>
    </div>
  );
}
export default playMusic;
