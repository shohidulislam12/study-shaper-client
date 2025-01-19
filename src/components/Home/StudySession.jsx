import { useQuery } from "@tanstack/react-query";
import StudySessionCard from "./StudySessionCard";
import useAxiousPublic from "../Shared/useAxiousPublic";

const StudySession = () => {
    const axiousPublic=useAxiousPublic()
    const {data:allsession=[],isLoading,refetch} = useQuery({
        queryKey: ['allsession'],
         queryFn: async()=>{
           const res= await axiousPublic.get(`/allsession`)
           return res.data
         }
                  
        })
        if (isLoading) {
         return <div className="loading loading-ring loading-lg"></div>;
       }
       const approve=allsession.filter((session)=>session.status==='approve')
       console.log(approve)
    return (
        <div className="my-20">
            <h2 className="text-3xl text-center my-5 font-semibold">Available Session</h2>
            <div className="grid p-2 gap-5 grid-cols-1 md:grid-cols-3">
           
           {
            approve.map(session=>
                <StudySessionCard key={session._id} session={session}></StudySessionCard>
            )
           }
            </div>
        </div>
    );
};

export default StudySession;