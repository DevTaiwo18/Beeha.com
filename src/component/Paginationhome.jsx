import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/style.css';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import image1 from '../assets/slider8.webp';
import image2 from '../assets/slider7.webp';
import image3 from '../assets/slider14.webp';

export default function Paginationhome() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img src={image1} alt="Slide 2" className="swiper-slide-image" width="1920" height="1080" />
            <div className="slider_content">
              <h1>Game of Thrones Jaime Lannister</h1>
              <h2>Themed Sneakers</h2>
              <Link to="/shop">Discover Now</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img src={image2} alt="Slide 3" className="swiper-slide-image w-full h-full object-cover" width="1920" height="1080" />
            <div className="slider_content">
              <h1>Well-made & thoughtfully designed</h1>
              <h2>This briefcase is the last one you’ll ever buy</h2>
              <Link to="/shop">Discover Now</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img src={image3} alt="Slide 1" className="swiper-slide-image" width="1920" height="1080" />
            <div className="slider_content">
              <h1 className=" text-black gg">Elegant & Versatile Fashion Choices</h1>
              <h2 className=" text-black gg">Fashion that adapts to any occasion</h2>
              <Link to="/shop" className="gg">Discover Now</Link>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
