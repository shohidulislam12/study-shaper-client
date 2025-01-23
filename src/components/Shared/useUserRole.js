import { useEffect, useState } from "react";
import useAxiousSecure from "./useAxiousSecure";


const useUserRole = (user) => {
  const axiousSecure = useAxiousSecure(); 
  const [role, setRole] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        if (user?.email) {
          const { data } = await axiousSecure.get(`/tuotorprivet/${user.email}`);
          setRole(data?.role); 
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRole();
  }, [user?.email, axiousSecure]);

  return [role, loading]; 
};

export default useUserRole;
