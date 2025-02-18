import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {
    const banners=[
        {
          "id": 1,
          "bannerText": "Shape Your Learning Journey with StudyShaper",
          "subText": "Empowering students with tailored resources and tools for effective studying.",
          "bgImageUrl": "https://i.ibb.co.com/XxfYzfzh/iewek-gnos-hh-Ux08-Pu-Ypc-unsplash.jpg"
        },
        {
          "id": 2,
          "bannerText": "Unlock Your Potential with StudyShaper",
          "subText": "Your path to smarter learning begins here.",
          "bgImageUrl": "https://i.ibb.co.com/pBN4H05v/thought-catalog-505eect-W54k-unsplash.jpg"
        },
        {
          "id": 3,
          "bannerText": "StudyShaper - Learn Better, Achieve More",
          "subText": "Personalized study solutions for students of all ages.",
          "bgImageUrl": "https://i.ibb.co.com/fxP1Yqr/depositphotos-110818854-stock-illustration-e-learning-education-and-university.jpg"
        },
        {
          "id": 4,
          "bannerText": "Transforming Education with StudyShaper",
          "subText": "Experience the future of learning with innovative tools and techniques.",
          "bgImageUrl": "https://i.ibb.co.com/zh0NSv6t/wes-hicks-4-Ee-Tna-C1-S4-unsplash.jpg"
        },
        {
          "id": 5,
          "bannerText": "Achieve Academic Excellence with StudyShaper",
          "subText": "Your companion in every step of your educational journey.",
          "bgImageUrl": "https://i.ibb.co.com/7J16s5P6/annie-spratt-d-WYU3i-mq-Eo-unsplash.jpg"
        }
      ]
      
    return (
        <div className='mt-16  bg-[#fbf6f6]'>
             <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
       {
        banners.map(banner=>
            <SwiperSlide>
            <div
      className="hero h-[500px]"
      style={{
        backgroundImage: `url(${banner.bgImageUrl})`,
      }}>
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-white text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{banner.bannerText}</h1>
          <p className="mb-5">
           {banner.subText}
          </p>
          <button className="btn bg-indigo-600 text-white hover:bg-green-600 transition duration-300 ease-in-out">Get Started</button>
        </div>
      </div>
    </div>
            </SwiperSlide>
        )
       }
       
      </Swiper>
        </div>
    );
};

export default Banner;

