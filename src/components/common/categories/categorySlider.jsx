import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import s from './index.module.scss';

const CategorySlider = () => {
  const slides = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={18}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3, 
          },
          1024: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 5,
          },
          1920: {
            slidesPerView: 6,
          },
        }}
      >
        {slides.map((slideNumber) => (
          <SwiperSlide key={slideNumber} className={s.slideBox}>
            <img
              src={`/images/Image.png`}
              alt={`Slide ${slideNumber}`}
            />
            <span>Категорія {slideNumber}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CategorySlider;
