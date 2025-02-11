import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

import s from './index.module.scss';
import { images } from './images';

const CustomSlider = () => {
  const navigate = useNavigate();

  const handleSlideClick = (index) => {
    if (index === 1) {
      navigate('/about_us');
    }
  };

  return (
    <img src={images[0]} className={s.photo}/>
  );
};

export default CustomSlider;
