import { Link } from "react-router-dom";
import leverpayHome from "../assets/images/leverpay-home-1.png";
import happyLady from "../assets/images/happy-lady.png";
import googlePlay from "../assets/images/googlePlay.png";
import React, { useEffect, useState } from "react";

const images = [
  {
    src: leverpayHome,
    text: "Your Best Online Payment Solution.",
    highlight: [2], // Index of words to be highlighted
  },
  {
    src: happyLady,
    text: "Pay all your Bills With Leverpay at a Cheap Rate.",
    highlight: [3, 8], // Index of words to be highlighted
  },
  // Add more images and texts as needed
];

const typingSpeed = 150;
const deletingSpeed = 50;
const delayBetweenCycles = 3000;
const imageDisplayDuration = 6000; // Duration for which the image is displayed
const imageTransitionDuration = 4000; // Duration of fade-in/out effect

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const [imageIndex, setImageIndex] = useState(0);
  const [imageFadeClass, setImageFadeClass] = useState("fade-in");

  useEffect(() => {
    const handleType = () => {
      const currentText = images[textIndex].text;
      const fullText = currentText;
      const updatedText = isDeleting
        ? fullText.substring(0, typedText.length - 1)
        : fullText.substring(0, typedText.length + 1);

      setTypedText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), delayBetweenCycles); // Wait before starting to delete
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTextIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };

    const typingTimer = setTimeout(
      () => handleType(),
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(typingTimer);
  }, [typedText, isDeleting, textIndex, loopNum]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageFadeClass("fade-out");
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setImageFadeClass("fade-in");
      }, imageTransitionDuration);
    }, imageDisplayDuration + imageTransitionDuration);

    return () => clearInterval(interval);
  }, [imageIndex]);

  const renderHighlightedText = (text, highlight) => {
    return text.split(" ").map((word, i) => {
      const isHighlighted = highlight.includes(i);
      return (
        <React.Fragment key={i}>
          <span className={isHighlighted ? "text-orange-shade-10" : ""}>
            {word}
          </span>
          {i < text.split(" ").length - 1 && " "}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="bg-gray-shade-5 border-[3px] border-white-shade-5 rounded-3xl md:rounded-[80px] p-3 sm:p-7 xl:px-16 flex flex-col lg:flex-row gap-8 items-center h-auto lg:h-[500px] relative">
      <div className="w-80 sm:w-[490px]">
        <h1
          className={`max-w-[490px] md:min-h-[140px] leading-tight font-primarySemiBold text-[30px] md:text-[56px] text-white`}
        >
          {renderHighlightedText(typedText, images[textIndex].highlight)}
        </h1>
        <p className="w-[324px] font-primarySemiBold italic text-xl text-white">
          Unlocking Endless Possibilities for your Business Success.
        </p>

        <div className="mt-8">
          <p className="font-primarySemiBold italic text-lg text-white">
            Download Now!
          </p>
          <button>
            <Link to="https://play.google.com/store/apps/details?id=com.leverpaymobiledashboard">
              <img src={googlePlay} alt="googleplay" />
            </Link>
          </button>
        </div>
      </div>
      <div
        className={`lg:absolute lg:right-0 lg:-top-10 hidden md:block ${imageFadeClass}`}
      >
        <img
          src={images[imageIndex].src}
          alt="leverpay home"
          className="h-[600px]"
        />
      </div>
    </div>
  );
};

export default Hero;
