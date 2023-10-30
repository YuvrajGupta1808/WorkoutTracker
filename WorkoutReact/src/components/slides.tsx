import { SetStateAction, useState } from "react";
import Back1 from "../Images/back1.png";
import Back2 from "../Images/back2.webp";
import Back3 from "../Images/back3.jpeg";
import Back4 from "../Images/back4.jpeg";
import "./slides.css"; // Assuming you moved the CSS you provided to a 'slides.css' file

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: Back1, caption: "Caption Text" },
    { src: Back2, caption: "Caption Two" },
    { src: Back3, caption: "Caption Three" },
    { src: Back4, caption: "Caption Four" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div>
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div
              className={`mySlides fade ${
                index === currentSlide ? "active" : ""
              }`}
              key={index}
            >
              <div className="numbertext">
                {index + 1} / {slides.length}
              </div>
              <img src={slide.src} alt={`Slide ${index + 1}`} />
              <div className="text">{slide.caption}</div>
            </div>
          ))}

          <a className="prev" onClick={prevSlide}>
            &#10094;
          </a>
          <a className="next" onClick={nextSlide}>
            &#10095;
          </a>
        </div>
        <br />
        <div>
          {slides.map((_, index) => (
            <span
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              key={index}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slides;
