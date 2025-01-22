import { useQuery } from "@tanstack/react-query";
import StudySessionCard from "./StudySessionCard";
import useAxiousPublic from "../Shared/useAxiousPublic";
import { useState } from "react";

const StudySession = () => {
    const axiousPublic=useAxiousPublic()
    const [itemPerPage,setitemparPage]=useState(6)
    const [currentPage,setCurrentPage]=useState(0)
    const {data,isLoading,refetch} = useQuery({
        queryKey: ['allsession',itemPerPage,currentPage],
         queryFn: async()=>{
           const res= await axiousPublic.get(`/allapprovsession?page=${currentPage}&size=${itemPerPage}`)
           return res.data
         }
                  
        })
        if (isLoading) {
         return <div className="loading loading-ring loading-lg"></div>;
       }
      const {totalCount,result:allsession}=data||{}

//pagination 


const numberOfpage=Math.ceil(totalCount.length/itemPerPage)

const pages=[...Array(numberOfpage).keys()]




    return (
        <div className="my-20">
            <h2 className="text-3xl text-center my-5 font-semibold">Available Session</h2>
            <div className="grid p-2 gap-5 grid-cols-1 md:grid-cols-3">
           
           {
            allsession.map(session=>
                <StudySessionCard key={session._id} session={session}></StudySessionCard>
            )
           }
       
            </div>
            <div className="flex items-center text-center">
               
          {
        pages.map((page,i)=><button  className={`join-item btn ${currentPage===page?'bg-green-200':''} `}
        onClick={()=>setCurrentPage(page)}
         key={i}>{i}</button>)}
        <select value={itemPerPage} onChange={(e)=>{setitemparPage(parseInt(e.target.value)),setCurrentPage(0)}} name="" id="">
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
        </select>
           </div>
        </div>
    );
};

export default StudySession;