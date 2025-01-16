import axios from "axios";

const axiousPublic=axios.create({
    baseURL:`${import.meta.env.VITE_API_URL}`
})
const useAxiousPublic = () => {
    return axiousPublic
};

export default useAxiousPublic;