import { useContext } from "react";
import TutorCard from "./TutorCard";
import { AuthContext } from "../Authprovider/AuthProvider";
import useAxiousPublic from "../Shared/useAxiousPublic";
import { useQuery } from "@tanstack/react-query";



const TutorSection = () => {
    const {user}=useContext(AuthContext)
 
    const axiousPublic=useAxiousPublic()
    const {data:allusers=[],isLoading,refetch} = useQuery({
        queryKey: ['tutor'],
         queryFn: async()=>{
           const res= await axiousPublic.get(`/users`)
           
           return res.data
         }
                  
        })
        if (isLoading) {
         return <div className="loading loading-ring loading-lg"></div>;
       }
       const tutors=allusers.filter(tutor=>tutor.role==='tutor') 
       console.log(tutors)
    return (
        <div className="my-20">
            <h2 className="text-3xl text-center my-5 font-semibold">Show All Tutor Tutor</h2>
            <div className="grid p-2 gap-5 grid-cols-1 md:grid-cols-3">
                {
                    tutors.map(tutor=>  <TutorCard tutor={tutor} key={tutor._id}></TutorCard>)
                }
      
            </div>
        </div>
    );
};

export default TutorSection;