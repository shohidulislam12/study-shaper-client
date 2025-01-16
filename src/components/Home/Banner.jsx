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
          "bgImageUrl": "https://i.ibb.co.com/txkrdfZ/top-view-of-modern-workplace-laptop-coffee-paper-note-pencil-on-the-white-background-and-copy-space.jpg"
        },
        {
          "id": 2,
          "bannerText": "Unlock Your Potential with StudyShaper",
          "subText": "Your path to smarter learning begins here.",
          "bgImageUrl": "https://i.ibb.co.com/fN8jNHw/education-and-learning-banner-flat-design-template-school-object-on-JEK4-TW.jpg"
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
          "bgImageUrl": "https://i.ibb.co.com/JtRwSTh/images-2.jpg"
        },
        {
          "id": 5,
          "bannerText": "Achieve Academic Excellence with StudyShaper",
          "subText": "Your companion in every step of your educational journey.",
          "bgImageUrl": "https://i.ibb.co.com/Z6knsH8/images-1.jpgg"
        }
      ]
      
    return (
        <div className='my-16'>
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

