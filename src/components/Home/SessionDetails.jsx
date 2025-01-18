import { useParams } from "react-router-dom";
import useAxiousPublic from "../Shared/useAxiousPublic";
import { useQuery } from "@tanstack/react-query";


const SessionDetails = () => {
    const date = new Date();
    
 
    const {id}=useParams()
    const axiousPublic=useAxiousPublic()
    const {data:session=[],isLoading,refetch} = useQuery({
        queryKey: ['session'],
         queryFn: async()=>{
           const res= await axiousPublic.get(`/session/${id}`)
           return res.data
         }
                  
        })
        if (isLoading) {
         return <div className="loading loading-ring loading-lg"></div>;
       }
       const registrationStartDate=new Date(session.registrationStartDate)
    
    // const session={
    //     "title": "Advanced Chemistry Session",
    //     "tutorName": "Dr. John Doe",
    //     "averageRating": 4.5,
    //     "description": "A comprehensive session on organic chemistry for advanced students.",
    //     "registrationStartDate": "2025-02-01T08:00:00",
    //     "registrationEndDate": "2025-02-28T23:59:59",
    //     "classStartTime": "2025-03-01T09:00:00",
    //     "classEndTime": "2025-03-01T11:00:00",
    //     "duration": 2,
    //     "registrationFee": 20,
    //     "reviews": [
    //       {
    //         "comment": "Great session, very informative.",
    //         "rating": 5
    //       },
    //       {
    //         "comment": "Good session but could be more interactive.",
    //         "rating": 4
    //       }
    //     ]
    //   }
      
    //   {
    //     "_id": "678b5ea1a4eee5f2f2c72b6b",
    //     "sessionTitle": "Sed omnis quidem sus",
    //     "tutorName": "shohidul Islam",
    //     "tutorEmail": "shohidulislamsifat2003@gmail.com",
    //     "tutorphoto": "https://lh3.googleusercontent.com/a/ACg8ocKwCVTG4HAdwcleGmH8otwZv1YD0A_NJiCBJWO1kUicxeOvEqMbdw=s96-c",
    //     "thumbnelurl": "https://i.ibb.co.com/fd9Sj50/caers.jpg",
    //     "sessionDescription": "Laudantium non in d",
    //     "registrationStartDate": "1996-12-21",
    //     "registrationEndDate": "2018-04-01",
    //     "classStartDate": "1972-01-13",
    //     "classEndDate": "1971-04-09",
    //     "sessionDuration": "65",
    //     "registrationFee": "0",
    //     "status": "pending"
    // },
    return (
    
          
            <div className="container my-16 mx-auto p-6">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            
                    <h1 className="text-3xl font-bold text-indigo-600 mb-4">{session.sessionTitle}</h1>
    
                    {/* Tutor Details */}
                    <div className="flex items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-700">Tutor: </h2>
                        <span className="ml-2 text-gray-600">{session.tutorName}</span>
                    </div>
                    <div>
                <img src="https://i.ibb.co.com/XpLKwHk/download-3.jpg" alt="" />
            </div>
    
                    {/* Average Rating */}
                    <div className="flex items-center mb-4">
                        <h3 className="text-xl font-semibold text-gray-700">Average Rating: </h3>
                        <span className="ml-2 text-yellow-500">{session.averageRating}</span>
                    </div>
    
                    {/* Session Description */}
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-700">Session Description: </h3>
                        <p className="text-gray-600">{session.description}</p>
                    </div>
    
                    {/* Registration Dates */}
                    <div className="flex items-center mb-4">
                        <div className="mr-6">
                            <h3 className="text-xl font-semibold text-gray-700">Registration Start Date: </h3>
                            <p className="text-gray-600">{new Date(session.registrationStartDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Registration End Date: </h3>
                            <p className="text-gray-600">{new Date(session.registrationEndDate).toLocaleDateString()}</p>
                        </div>
                    </div>
    
                    {/* Class Timing */}
                    <div className="flex items-center mb-4">
                        <div className="mr-6">
                            <h3 className="text-xl font-semibold text-gray-700">Class Start Time: </h3>
                            <p className="text-gray-600">{new Date(session.classStartTime).toLocaleTimeString()}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Class End Time: </h3>
                            <p className="text-gray-600">{new Date(session.classEndTime).toLocaleTimeString()}</p>
                        </div>
                    </div>
    
                    {/* Session Duration */}
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-700">Session Duration: </h3>
                        <p className="text-gray-600">{session.duration} hours</p>
                    </div>
    
                    {/* Registration Fee */}
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-700">Registration Fee: </h3>
                        <p className="text-gray-600">
                            {session.registrationFee === 0 ? 'Free' : `$${session.registrationFee}`}
                        </p>
                    </div>
    
                    {/* Reviews */}
                    {/* <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-700">Reviews:</h3>
                        {session.reviews.length > 0 ? (
                            session.reviews.map((review, index) => (
                                <div key={index} className="border-b py-3">
                                    <p className="text-gray-600">{review.comment}</p>
                                    <p className="text-yellow-500">Rating: {review.rating} / 5</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600">No reviews yet.</p>
                        )}
                    </div>
     */}
                    {/* Book Now or Registration Closed */}
                    <div className="mt-6">
                        {session ? (
                            <button
                                className="btn w-full bg-gray-500 text-white cursor-not-allowed"
                                disabled
                            >
                                Registration Closed
                            </button>
                        ) : (
                            <button className="btn w-full bg-indigo-600 text-white hover:bg-indigo-700">
                                Book Now
                            </button>
                        )}
                    </div>
                </div>
            </div>
     
         
        );
    };
export default SessionDetails;