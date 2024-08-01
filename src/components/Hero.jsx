import { Fade} from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import leverpayHome from "../assets/images/leverpay-home-1.png";
import portraitMan from "../assets/images/portrait-man.png";
import googlePlay from "../assets/images/googlePlay.png";
import React, { useEffect, useState } from "react";

const images = [
  {
    src: leverpayHome,
    text: "Your Best Online Payment Solution.",
    highlight: [2], // Index of words to be highlighted
  },
  {
    src: portraitMan,
    text: "Pay all your Bills With Leverpay at a Cheap Rate",
    highlight: [3, 8], // Index of words to be highlighted
  },
  // Add more images and texts as needed
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("visible");

  useEffect(() => {
    const showDuration = 8000; // 8 seconds visible
    const fadeDuration = 4000; // 4 seconds fade-in/out

    const interval = setInterval(() => {
      // Start fading out
      setFadeClass("fade-out");
      setTimeout(() => {
        // Change image and text
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        // Start fading in
        setFadeClass("fade-in");
      }, fadeDuration); // Wait for fade-out to complete
    }, showDuration + fadeDuration); // Wait for showDuration and fadeDuration

    return () => clearInterval(interval);
  }, []);

  const { text, highlight } = images[index];

  // Function to render text with highlighted words
  const renderText = (text, highlight) => {
    return text.split(" ").map((word, i) => {
      const isHighlighted = highlight.includes(i);
      return (
        <React.Fragment key={i}>
          <span className={isHighlighted ? "text-orange-shade-10" : ""}>
            {word}
          </span>
          {/* Add a space after each word except for the last word */}
          {i < text.split(" ").length - 1 && " "}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="bg-gray-shade-5 border-[3px] border-white-shade-5 rounded-3xl md:rounded-[80px] p-3 sm:p-7 xl:px-16 flex flex-col lg:flex-row gap-8 items-center h-auto lg:h-[500px] relative">
      <div>
        <h1
          className={`max-w-[490px] leading-tight font-primarySemiBold text-[30px] md:text-[56px] text-white transition-opacity duration-4000 ${fadeClass}`}
        >
          {renderText(text, highlight)}
        </h1>
        <p className="w-[324px] font-primarySemiBold italic text-xl text-white">
          Unlocking Endless Possibilities for your Business Success.
        </p>

        <div className="mt-8">
          <p className="font-primarySemiBold italic text-lg text-white">
            Download Now!
          </p>
          <button>
            <Link to="https://play.google.com/store/apps/details?id=com.leverpaymobiledashboard"> <img src={googlePlay} alt="googleplay" /> </Link>
          </button>
        </div>
      </div>
      <Fade>
        <div
          className={`lg:absolute lg:right-0 lg:-top-10 transition-opacity duration-4000 hidden md:block ${fadeClass}`}
        >
          <img
            src={images[index].src}
            alt="leverpay home"
            className="h-[600px]"
          />
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
