import React from "react";

const HowWork = () => {
  return (
    <section className="py-16 bg-[#fbf6f6]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Follow these simple steps to unlock your full learning potential with Study Shaper.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute h-full w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 hidden md:block"></div>

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="w-full md:w-1/2 md:pr-8 text-right mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Step 1: Sign Up</h3>
              <p className="text-gray-600">
                Create your free account and set up your profile. Choose your learning goals and preferences to get started.
              </p>
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://i.ibb.co.com/hJppWr6c/Screenshot-2025-02-19-005347.png"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="w-full md:w-1/2 md:pr-8 order-2 md:order-1">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://i.ibb.co.com/zH7Q25pw/Screenshot-2025-02-19-011314.png"
                  alt="Explore session"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-8 text-left mb-4 md:mb-0 order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-2">Step 2: Explore Session</h3>
              <p className="text-gray-600">
                explore session from here.you also add pagination freature from here and control how session you want to see .Find Your Session And ses details about session such as rejistaration start time end time, teacher, reaview description ,and free or not and Book Session 
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="w-full md:w-1/2 md:pr-8 text-right mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Step 3: Manage Your DashBord</h3>
              <p className="text-gray-600">
                you can see your booked session,and see materials that is provided by tutor and also add notes and manage noters like update delate .
              </p>
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://i.ibb.co.com/0jX5z5T/customize.png"
                  alt="Customize Plan"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>

     
        </div>
      </div>
    </section>
  );
};

export default HowWork
;