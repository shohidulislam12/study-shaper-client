import React from "react";
import { FaBookOpen, FaVideo, FaClipboardList, FaChartBar, FaBrain, FaUsers } from "react-icons/fa";

const features = [
    {
        icon: <FaBookOpen className="text-indigo-600 text-4xl" />,
        title: "Comprehensive Study Materials",
        description: "Access high-quality notes, guides, and textbooks for various subjects.",
    },
    {
        icon: <FaVideo className="text-indigo-600 text-4xl" />,
        title: "Live Sessions & Tutorials",
        description: "Join expert-led live classes and interactive tutorials.",
    },
    {
        icon: <FaClipboardList className="text-indigo-600 text-4xl" />,
        title: "Note Management",
        description: "Organize, edit, and save notes effortlessly in one place.",
    },
    {
        icon: <FaChartBar className="text-indigo-600 text-4xl" />,
        title: "Progress Tracking",
        description: "Monitor your learning journey with detailed analytics.",
    },
    {
        icon: <FaBrain className="text-indigo-600 text-4xl" />,
        title: "Quizzes & Assessments",
        description: "Test your knowledge with engaging quizzes and exams.",
    },
    {
        icon: <FaUsers className="text-indigo-600 text-4xl" />,
        title: "Community Support",
        description: "Connect with mentors and fellow learners for guidance.",
    }
];

const Feature = () => {
    return (
        <section className="py-16 p-2 md:p-4 dark:bg-black    bg-[#fbf6f6] text-gray-800">
            <div className=" mx-auto ">
                <h2 className="text-3xl font-bold text-center dark:text-white text-indigo-700 mb-8">
                    Why Choose <span className="text-indigo-600 dark:text-white">StudyShaper?</span>
                </h2>
                <p className="text-center dark:text-white text-gray-600 max-w-2xl mx-auto mb-10">
                    Unlock your learning potential with our top-notch study features.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-500 dark:text-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl dark:text-white font-semibold text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-white  mt-2">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;
