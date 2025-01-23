import { NavLink, useParams } from "react-router-dom";
import useAxiousPublic from "../Shared/useAxiousPublic";
import { useQuery } from "@tanstack/react-query";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ChekOut from "../Dashbord/student/ChekOut";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { toast } from "react-toastify";
import useUserRole from "../Shared/useUserRole";
import useAxiousSecure from "../Shared/useAxiousSecure";


const stripePromise = loadStripe(import.meta.env.VITE_PK);

const SessionDetails = () => {
  const date = new Date();
  const { user } = useContext(AuthContext);
  const axiousSecure=useAxiousSecure()
  const { id } = useParams();
  const axiousPublic = useAxiousPublic();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [role, roleLoading] = useUserRole(user);
console.log('user',role)
  // Function to show the modal
  const showModal = () => setIsModalOpen(true);
  // Function to hide the modal
  const closeModal = () => setIsModalOpen(false);
  const { data: session = [], isLoading, refetch } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const res = await axiousPublic.get(`/session/${id}`);
      return res.data;
    }
  });
//call review 
const { data: booked = [], isLoading:bookedLoading, refetch:bookfetch } = useQuery({
  queryKey: ['booked'],
  queryFn: async () => {
    const res = await axiousPublic.get(`/booked-datachek?email=${user?.email}&id=${id}`);
    return res.data;
  }
});


const { data: reviews = [], isLoading:reviewLoading, refetch:revrefetch } = useQuery({
    queryKey: ['review'],
    queryFn: async () => {
      const res = await axiousPublic.get(`/reviews/${id}`);
      return res.data;
    }
  });
  if (bookedLoading) {
    return <div className="loading loading-ring loading-lg"></div>;
  }

  console.log('booked', booked)

  if (reviewLoading) {
    return <div className="loading loading-ring loading-lg"></div>;
  }
  //console.log('review',reviews)

  if (isLoading) {
    return <div className="loading loading-ring loading-lg"></div>;
  }



const averageRating=reviews.reduce((sum,review)=>sum+review.studentRating,0)/reviews.length

  const registrationStartDate = new Date(session.registrationStartDate);
  const disablebtn = date > registrationStartDate;
 // console.log('disable button:', disablebtn);

  const handlebookfree = async (id) => {
  //  console.log('book free', id);
    const bookdata = {
      sessionId: session._id,
      studentEmail: user?.email,
      TutorEmail: session.tutorEmail,
      sessionTitle: session.sessionTitle,
      tutorName: session.tutorName,
      tutorphoto: session.tutorphoto,
      sessionFee: '0',
      transitionId: 'N/A'
    };
    const { data } = await axiousPublic.post('/booked-data', bookdata);
    if (data.acknowledged) {
      bookfetch()
      toast.success('Booked successfully');
    }
  };



  const openmodal = () => {
    showModal(); // Open modal to add review
  };
  const handleReview=async(e)=>{
    e.preventDefault()
    const review=e.target.review.value
    const rating=parseInt(e.target.rating.value)
if(rating>5){
  return toast.warning('review ot of 5')
}
    const reviewData={
        sessionId:session._id,
        studentReview:review,
        studentRating:rating,
        studentMail:user?.email,
        studentImg:user?.photoURL,
        username:user.displayName
    }
   // console.log(reviewData)
 const {data}=await axiousPublic.post('/review',reviewData)
 //console.log(data)
 if(data.acknowledged){
    revrefetch()
    toast.success('review add sucessfully')
 }

setIsModalOpen(false)
  }

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
          <img src={session.thumbnelurl} alt="" />
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
            <p className="text-gray-600">{new Date(session.classStartDate).toLocaleDateString()}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Class End Time: </h3>
            <p className="text-gray-600">{new Date(session.classEndDate).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Session Duration */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Session Duration:</h3>
          <p className="text-gray-600">{session.sessionDuration}  hours</p>
        </div>

        {/* Registration Fee */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Registration Fee: </h3>
          <p className="text-gray-600">
            {session.registrationFee === 0 ? 'Free' : `$${session.registrationFee}`}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Avagerage Rating :{averageRating ||'N/A'} </h2>
        </div>

        {/* Reviews */}
        <div className="mb-4 flex   justify-center items-center gap-5">
          <h3 className="text-xl font-semibold text-gray-700">Reviews:</h3>
     {
         booked.length>0&& <button  onClick={ openmodal} className={`btn btn-sm disabled`}>Add Review</button>
     }
        </div>
    {    reviews.length>0? <div className="h-40 overflow-scroll">
         {
            reviews.map((review,i)=>
                <div className="">
  {/* Comment Section */}
  <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
    <div className="flex items-start mb-4">
      {/* User Image */}
     
      <img
        src={review.studentImg}
        alt="User"
        className="w-12 h-12 rounded-full mr-4"
      />
      
      <div>
        {/* User Name */}
        <h3 className="text-lg font-semibold text-gray-800">{review.username}</h3>
        
    
        <p className="text-gray-600 mt-2">{review.studentReview}</p>
      </div>
    </div>
  </div>
</div>

            )
         }



        </div>:<p className="text-2xl text-red-400 font-semibold">No Review Available </p>}

        {/* Book Now or Registration Closed */}
{booked.length===0&& role==='student' &&    <div className="mt-6">
          {disablebtn ? (
            <button className="btn w-full bg-gray-500 text-white cursor-not-allowed" disabled>
              Registration Closed
            </button>
          ) : session.registrationFee > 0 ? (
            <div>
              {/* Payment */}
              <Elements stripe={stripePromise}>
                <ChekOut bookfetch={bookfetch} session={session} />
              </Elements>
            </div>
          ) : (
            <button
              onClick={() => handlebookfree(session._id)}
              className="btn w-full bg-indigo-600 text-white hover:bg-indigo-700">
              Book Free
            </button>
          )}
        </div>}
      </div>

      {/* Modal for Review */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Add Review</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              {/* Add Review Content Goes Here */}
              <form onSubmit={handleReview} className="card-body">
                <input type="number"   name='rating'  placeholder="review out of 5" required  />
              <textarea name='review' className="w-full p-2 border rounded" placeholder="Write your review here..." />
              <button type="submit"  className="btn btn-primary w-full">Submit Review</button>
      </form>
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={closeModal} className="btn btn-warning">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SessionDetails;
