import { useContext, useState } from "react";
import TutorCard from "./TutorCard";
import { AuthContext } from "../Authprovider/AuthProvider";
import useAxiousPublic from "../Shared/useAxiousPublic";
import { useQuery } from "@tanstack/react-query";



const TutorSection = () => {
    const {user}=useContext(AuthContext)
 const [currentPage,setCurrentPage]=useState(0)
    const axiousPublic=useAxiousPublic()
    const sizeogPage=4
    const {data,isLoading,refetch} = useQuery({
        queryKey: ['tutors',sizeogPage,currentPage],
         queryFn: async()=>{
           const res= await axiousPublic.get(`/alltutor?page=${currentPage}&size=${sizeogPage}`)
           
           return res.data
         }
                  
        })
        if (isLoading) {
         return <div className="loading loading-ring loading-lg"></div>;
       }
const {totaltutor,tutors:tutors=[]}=data||{}

 const numberOfpage=Math.ceil(totaltutor.length/sizeogPage)
   console.log('tutor',tutors)
const pages=[...Array(numberOfpage).keys()]
console.log('pages',pages)
const handleNext=()=>{
    if(currentPage<numberOfpage-1){
        setCurrentPage(currentPage+1)
    }
}
const handlePrevious=()=>{

    if(currentPage>0){
        setCurrentPage(currentPage-1)
    }
}

    return (
        <div className="py-20 p-2 md:p-4 dark:bg-black bg-[#fbf6f6]">
            <h2 className="text-3xl dark:text-white  font-bold text-center text-indigo-700 mb-8">Show All Tutor Tutor
                </h2>
            <div className="grid p-2 gap-5 grid-cols-1 md:grid-cols-4">
                {
                    tutors.map(tutor=>  <TutorCard tutor={tutor} key={tutor._id}></TutorCard>)
                }
      
            </div>
            <div className="join items-center flex justify-center">
            <button onClick={handlePrevious} className="join-item btn">«</button>
  <button className="join-item btn">Page {currentPage}</button>
  <button onClick={handleNext} className="join-item btn">»</button>
</div>
        </div>
    );
};

export default TutorSection;