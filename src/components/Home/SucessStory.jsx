import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SuccessStory = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch("/sucess.json")
            .then((res) => res.json())
            .then((data) => setStories(data))
            .catch((error) => console.error("Error fetching success stories:", error));
    }, []);

    return (
        <section className="py-16 p-2 dark:bg-black  md:p-4 bg-gray-100 text-gray-800">
            <div className="max-w-6xl mx-auto px-2">
                <h2 className="text-3xl font-bold text-center dark:text-white text-indigo-700 mb-8">
                    🏆 Success <span className="text-indigo-600 dark:text-white">Stories</span>
                </h2>
                <p className="text-center dark:text-white text-gray-600 max-w-2xl mx-auto mb-10">
                    Here are some inspiring success stories from our students who transformed their careers with StudyShaper.
                </p>
            </div>

            {/* Swiper Slider */}
            <Swiper
                slidesPerView={1} // Default: 1 slide for small screens
                spaceBetween={20}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },  // Phones
                    768: { slidesPerView: 2 },  // Tablets
                    1024: { slidesPerView: 3 }, // Medium screens
                    1280: { slidesPerView: 4 }  // Large screens (4 cards at a time)
                }}
                modules={[Pagination]}
                className="mySwiper max-w-7xl mx-auto px-4"
            >
                {stories.map((student, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white dark:text-white dark:bg-gray-500 shadow-lg rounded-xl overflow-hidden p-6 text-left">
                            <img
                                src={student.image}
                                alt={student.name}
                                className="w-24 h-24 mx-auto rounded-full shadow-md mb-4"
                            />
                            <h3 className="text-xl font-bold dark:text-white text-gray-900">{student.name}</h3>
                            <p className="text-indigo-600  dark:text-white font-semibold">{student.title}</p>
                            <p className="text-gray-600 dark:text-white mt-3 text-sm">{student.story}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default SuccessStory;
