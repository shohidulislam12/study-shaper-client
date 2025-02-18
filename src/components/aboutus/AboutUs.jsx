import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutUs = () => {
  return (
    <div className="min-h-screen my-16 bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="hero h-96"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/hR332yJL/fa-barboza-NWoao-Mg-Mi-VY-unsplash.jpg)",
        }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">About StudyShaper</h1>
            <p className="mb-5 text-white">
              Empowering Students with Smarter Learning. A research program on arts-in-health 
              interventions and a software package for studying fish otolith shape.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Our Mission */}
      <motion.div className="max-w-6xl mx-auto p-8 text-center" variants={fadeIn} initial="hidden" whileInView="visible">
        <h2 className="text-4xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-600 mt-4">
          At StudyShaper, we aim to revolutionize the way students learn by providing high-quality 
          study materials, interactive courses, and a supportive community.
        </p>
      </motion.div>

      {/* Why Choose Us */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-8">
        {[
          { title: "Expert Instructors", desc: "Learn from the best educators." },
          { title: "Interactive Learning", desc: "Engaging lessons and quizzes." },
          { title: "Community Support", desc: "Connect with fellow learners." },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="text-2xl font-bold text-blue-600">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Meet Our Team */}
      <div className="max-w-6xl mx-auto text-center p-8">
        <h2 className="text-4xl font-semibold text-gray-800">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
  { name: "John Doe", role: "Founder & CEO", img: "https://i.pravatar.cc/150?img=1" },
  { name: "Jane Smith", role: "Lead Instructor", img: "https://i.ibb.co/qMFZSFNz/jeffrey-keenan-p-Uhxo-Sap-PFA-unsplash.jpg" },
  { name: "Mark Wilson", role: "Community Manager", img: "https://i.ibb.co/TqY7zSDz/irene-strong-v2a-Knj-Mb-P-k-unsplash.jpg" },
  { name: "Emily Carter", role: "Head of Content", img: "https://i.ibb.co.com/5hbJywRC/charlie-green-3-Jmf-ENc-L24-M-unsplash.jpg" },
  { name: "Daniel Lee", role: "Full Stack Developer", img: "https://i.pravatar.cc/150?img=5" },
  { name: "Sophia White", role: "Marketing Specialist", img: "https://i.pravatar.cc/150?img=6" },
  { name: "Liam Johnson", role: "UX/UI Designer", img: "https://i.pravatar.cc/150?img=7" },
  { name: "Olivia Martinez", role: "Customer Support", img: "https://i.pravatar.cc/150?img=8" },
  { name: "Asif Adnan", role: "office maneger", img: "https://i.ibb.co.com/hx7SJQL6/download-18.jpg" }
].map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <img className="w-32 h-32 mx-auto rounded-full" src={member.img} alt={member.name} />
              <h3 className="text-2xl font-bold text-gray-800 mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
 {/* Testimonials */}
<motion.div className="bg-blue-50 py-16 text-center" variants={fadeIn} initial="hidden" whileInView="visible">
  <h2 className="text-4xl font-semibold text-gray-800">What Our Students Say</h2>
  
  <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
    { [
  { 
    quote: "StudyShaper has completely transformed the way I study. The interactive lessons, well-structured courses, and expert instructors have helped me improve my skills tremendously. The quizzes and assignments make learning fun and engaging. I feel more confident and prepared for exams now. Highly recommended!", 
    name: "Emily R." 
  },
  { 
    quote: "I struggled with self-studying before, but StudyShaper provided me with all the tools I needed. The easy-to-follow notes, structured courses, and engaging exercises have helped me stay focused. I love the supportive learning community as well. This is the best platform for students looking for success!", 
    name: "David M." 
  },
  { 
    quote: "The expert instructors on StudyShaper explain concepts so well that even tough topics become easy to understand. The interactive videos, well-designed assignments, and doubt-clearing sessions have made my studies so much better. It’s an amazing resource for anyone wanting to master their subjects.", 
    name: "Sophia W." 
  },
  { 
    quote: "Thanks to StudyShaper, I have improved my grades significantly. The structured courses make learning so much easier, and I love how everything is well-organized. The quizzes keep me engaged, and the discussion forums allow me to connect with other learners. Truly an incredible platform!", 
    name: "Michael J." 
  },
  { 
    quote: "I used to find studying boring, but StudyShaper has made learning exciting and interactive. The platform provides high-quality study materials and real-world examples, making it easier to grasp concepts. The community support has been invaluable, and I enjoy every moment spent here. Fantastic experience!", 
    name: "Liam P." 
  },
  { 
    quote: "One of the best e-learning platforms I’ve ever used! StudyShaper offers well-structured lessons, excellent instructors, and an intuitive user interface. I have gained so much knowledge and confidence. The progress tracking feature helps me stay motivated, and the resources available are simply outstanding.", 
    name: "Jessica T." 
  },
  { 
    quote: "StudyShaper has changed my study habits completely. The interactive exercises, high-quality content, and amazing instructors have helped me improve my understanding of different subjects. The best part is the flexibility – I can study at my own pace while still achieving great results. Highly recommend!", 
    name: "Daniel K." 
  },
  { 
    quote: "I love how StudyShaper makes learning enjoyable. The lessons are engaging, the platform is easy to navigate, and the instructors are incredibly helpful. I feel more prepared for my exams now, thanks to the well-organized notes and quizzes. It’s a must-try for every student!", 
    name: "Olivia M." 
  },
  { 
    quote: "The personalized learning experience at StudyShaper has helped me focus on my weak areas and improve drastically. The interactive tests, real-time feedback, and supportive educators make this platform stand out. I have learned more in a few months here than in years of traditional learning.", 
    name: "Kevin B." 
  },
  { 
    quote: "StudyShaper is a game-changer for students. The platform offers so many resources that make studying easier and more effective. I appreciate how well-structured the courses are and how easy it is to track my progress. The team behind this deserves all the praise!", 
    name: "Ava W." 
  },
  { 
    quote: "Since joining StudyShaper, I’ve seen a huge improvement in my learning. The courses are designed beautifully, making them easy to follow. The interactive elements keep me engaged, and I actually enjoy studying now. I would recommend this to any student looking for an effective way to learn!", 
    name: "Ethan L." 
  },
  { 
    quote: "The best learning experience I’ve ever had! StudyShaper provides everything I need to succeed. The well-structured lessons, real-world examples, and interactive elements make learning exciting. I love being part of such a great educational community. This platform has made a significant impact on my academic journey!", 
    name: "Isabella N." 
  },
].map((review, index) => (
      <motion.div
        key={index}
        className="bg-white p-6 rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <p className="text-gray-600 text-left italic">"{review.quote}"</p>
        <h3 className="text-xl font-bold text-gray-800 mt-2">- {review.name}</h3>
      </motion.div>
    ))}
  </div>
</motion.div>


      {/* Call to Action */}
      <motion.div className="text-center py-10" variants={fadeIn} initial="hidden" whileInView="visible">
        <h2 className="text-3xl font-bold text-gray-800">Join StudyShaper Today</h2>
        <p className="text-lg text-gray-600 mt-2">Start your journey with us and learn smarter!</p>
        <Link to='/signin'>
          <motion.button
            className="mt-4 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700"
            whileHover={{ scale: 1.1 }}
          >
            Get Started
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutUs;
