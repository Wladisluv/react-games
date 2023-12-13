import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './PhotoSlider.module.scss';

interface PhotoSliderProps {
  slides: string[];
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

const progressBar = document.querySelector(styles['.screenshots-gallery__progress-active']) as HTMLElement | null;

useEffect(() => {
  if (progressBar) {
    const percent = ((currentSlide + 1) / slides.length) * 100;
    progressBar.style.width = `${percent}%`;
  }
}, [currentSlide, progressBar, slides]);


  return (
    <div className={styles["game-gallery"]}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img
              src={slide}
              alt={``}
              title={``}
              width={500}
              height={200}
            />
          </div>
        ))}
      </Slider>
      <div className={styles["game-gallery__progress-wrapper"]}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={styles[`game-gallery__progress ${
                index === currentSlide ? 'game-gallery__progress_active' : ''
              }`]}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
