import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const newsArticles = [
    {
        title: "5 Study Hacks to Improve Retention",
        date: "Feb 18, 2025",
        description: "Learn the best study techniques to enhance memory and focus during your learning sessions.",
        image: "https://i.ibb.co.com/qYJDdxfQ/compare-fibre-Y8-Ti-Lv-Kn-Leg-unsplash.jpg",
        link: "https://www.livemint.com/web-stories/5-study-hacks-to-improve-your-memory-retention-visual-story-11733721936129.html"
    },
    {
        title: "How AI is Transforming Online Education",
        date: "Feb 15, 2025",
        description: "Discover how artificial intelligence is shaping the future of learning and personalized education.",
        image: "https://i.ibb.co.com/XkzKFXwf/annie-spratt-d-WYU3i-mq-Eo-unsplash.jpg",
        link: "https://www.hashstudioz.com/blog/ai-transforming-education-sector/"
    },
    {
        title: "Upcoming Courses for 2025",
        date: "Feb 10, 2025",
        description: "Check out the new courses launching soon to help you upskill and advance your career.",
        image: "https://i.ibb.co.com/67TSPpgS/charlesdeluvio-Lks7vei-e-Ag-unsplash.jpg",
        link: "https://www.itecgoi.in/upcoming_courses"
    },
    {
        title: "Upcoming Courses for 2025",
        date: "march 25, 2025",
        description: "Check out the new courses launching soon to help you upskill and advance your career.",
        image: "https://i.ibb.co.com/W4ZFKnF6/larissa-cardoso-z-HUHe-NT-Ut-E-unsplash.jpg",
        link: "https://www.itecgoi.in/upcoming_courses"
    }
];

const NewsComponent = () => {
    return (
        <section className="py-5 p-2 md:p-4 bg-[#fbf6f6] text-gray-800">
            <div className=" mx-auto px-0">
                <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
                    📢 Latest <span className="text-indigo-600">News & Updates</span>
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                    Stay informed with the latest updates, study tips, and educational insights.
                </p>
                <div className="grid p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {newsArticles.map((article, index) => (
                        <div
                            key={index}
                            className="bg-white h-[550px] flex flex-col flex-grow p-4 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
                        >
                           <div className="h-52">
                           <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-[100%]  object-cover"
                            />
                           </div>
                            <div className="p-6 flex  flex-col justify-between  flex-grow">
                                <h3 className="text-xl font-semibold text-gray-900">{article.title}</h3>
                                <div className="flex items-center text-gray-500 text-sm mt-2">
                                    <FaCalendarAlt className="mr-2 text-indigo-600" />
                                    <span>{article.date}</span>
                                </div>
                                <p className="text-gray-600 mt-3">{article.description}</p>
                                <a
                                    href={article.link}
                                    className="text-indigo-600 font-semibold mt-4 inline-block hover:underline" target="_blank"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsComponent;
