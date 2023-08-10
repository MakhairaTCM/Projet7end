import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slider = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider">
      <button className="arrow prev" onClick={handlePrev}>
        <FontAwesomeIcon icon={faChevronLeft} size="2x" className="icon"/>
      </button>
      <img src={pictures[currentIndex]} alt={`${currentIndex}`} />
      <button className="arrow next" onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} size="2x" className="icon"/>
      </button>
      <div className="counter">{currentIndex + 1} / {pictures.length}</div>
    </div>
  );
};

export default Slider;
