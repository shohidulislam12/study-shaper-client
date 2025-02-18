import React, { useEffect, useState } from "react";

const  SucessStory= () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch("/sucess.json")
            .then((res) => res.json())
            .then((data) => setStories(data))
            .catch((error) => console.error("Error fetching success stories:", error));
    }, []);

    return (
        <section className="py-16 bg-gray-100 text-gray-800">
            <div className="max-w-6xl mx-auto px-2">
                <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
                    🏆 Success <span className="text-indigo-600">Stories</span>
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                    Here are some inspiring success stories from our students who transformed their careers with StudyShaper.
                </p>
                <div className="grid md:grid-cols-4 gap-6">
                    {stories.map((student, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden p-6 text-center">
                            <img
                                src={student.image}
                                alt={student.name}
                                className="w-24 h-24 mx-auto rounded-full shadow-md mb-4"
                            />
                            <h3 className="text-xl font-bold text-gray-900">{student.name}</h3>
                            <p className="text-indigo-600 font-semibold">{student.title}</p>
                            <p className="text-gray-600 mt-3 text-sm">{student.story}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SucessStory;
