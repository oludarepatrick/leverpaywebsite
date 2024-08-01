import { useRef } from "react";
import poster from "../assets/images/video-poster.png"

const VideoDemo = () => {
    const videoRef = useRef(null);
 
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
            <div className="">
                <video
                    ref={videoRef}
                    width=""
                    height=""
                    controls
                    poster={poster}
                >
                    <source src="https://youtu.be/TYtHMCt5mEo" type="video/mp4"/>
                    Your browser does not support video tag
                </video>
            </div>
        </div>
    )
}
export default VideoDemo;