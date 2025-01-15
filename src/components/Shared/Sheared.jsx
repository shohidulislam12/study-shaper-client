import axios from "axios"

 export const photoURL=async (photo)=>{
    const formData=new FormData()
    formData.append('image',photo)
    const apiKey = `${import.meta.env.VITE_apiImagebb}`; // Replace with your actual API key
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;
    const {data}= await axios.post(url,formData,{
        headers:{
            "Content-Type": "multipart/form-data",
        }
    })
    const link=data?.data?.display_url
       console.log(link)
return link
}