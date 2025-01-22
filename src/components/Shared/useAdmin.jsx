import { useQueries, useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import useAxiousSecure from "./useAxiousSecure";


const useAdmin = () => {
    const axiousSecure=useAxiousSecure()
    const {user}=useContext(AuthContext)
const {data:isadmin}=useQuery({
queryKey:[user?.email,'isadmin'],
queryFn:async()=>{
    const res=await axiousSecure(`/user/admin/${user.email}`)
    //console.log(res.data)
    return res.data.admin
}
})
return [isadmin]
};

export default useAdmin;