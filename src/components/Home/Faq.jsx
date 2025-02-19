import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import animationData from "../../../public/Animation - 1739908532790.json"; // Import the JSON file
import Lottie from "lottie-react";
const faqs = [
    {
        question: "How does StudyShaper help students?",
        answer: "StudyShaper provides structured learning resources, live sessions, and interactive tools to enhance student learning.",
    },
    {
        question: "Are the study materials free?",
        answer: "Yes! Many of our study materials are free. However, we also offer premium content for advanced courses.",
    },
    {
        question: "Can I access StudyShaper on mobile?",
        answer: "Absolutely! StudyShaper is fully optimized for both desktop and mobile devices for a seamless experience.",
    },
    {
        question: "How often are new courses added?",
        answer: "We add new courses every month based on student demand and industry trends.",
    },
    {
        question: "Do you offer premium content?",
        answer: "Yes, we offer exclusive premium courses with expert instructors, additional resources, and certification.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pb-16 pt-5 p-2 md:p-4 bg-[#fbf6f6] text-gray-800">
               <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
                    ❓ Frequently Asked <span className="text-indigo-600">Questions</span>
                </h2>
          <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2  w-full">
  
        <Lottie
          animationData={animationData} // Pass the JSON file
          loop={true} // Loop the animation
          autoplay={true} // Autoplay the animation
        />
     
            </div>
            <div className="md:w-1/2 w-full mx-auto p2 md:p-4">
             
                <p className="text-center text-black max-w-2xl mx-auto mb-10">
                    Here are some of the most common questions we get from students.
                </p>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <button
                                className="w-full flex justify-between items-center md:px-4 py-4 text-left font-semibold text-gray-900 hover:bg-gray-200 transition"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                {openIndex === index ? (
                                    <FaChevronUp className="text-indigo-600" />
                                ) : (
                                    <FaChevronDown className="text-indigo-600" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 py-4 text-gray-700 border-t border-gray-200">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </section>
    );
};

export default Faq;
