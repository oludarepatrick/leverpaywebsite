import { useState } from "react";
import ReactPlayer from "react-player";
import poster from "../assets/images/video-poster.png"
import { IoPlay } from "react-icons/io5";

const VideoDemo = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };

  return (
    <div className="container mx-auto">
            <div className="md:flex md:justify-evenly md:gap-4 py-4 text-center">
                <h3 className="font-primarySemiBold lg:text-2xl md:text-xl text-xs pb-2">
                    Watch Our Video Demo on how to use Leverpay APP
                </h3>
                <h3 className="font-primaryAgrandirBold lg:text-2xl md:text-xl text-xs">
                    Watch Demo
                </h3>
            </div>
        <div className="relative w-full md:pt-[40%] pt-[56.25%]">
        {!playing && (
            <div className="absolute inset-0 bg-black flex items-center justify-center cursor-pointer" onClick={handlePlay}>
            <img src={poster} alt="Poster" className="absolute inset-0 w-full h-full object-cover z-10" />
            <button className="absolute z-20 bg-black bg-opacity-50 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl">
                <IoPlay/>
            </button>
            </div>
        )}
        <ReactPlayer
            url="https://youtu.be/TYtHMCt5mEo"
            playing={playing}
            controls
            className="absolute inset-0 z-0"
            width="100%"
            height="100%"
        />
        </div>
    </div>    
  );
};

export default VideoDemo;
