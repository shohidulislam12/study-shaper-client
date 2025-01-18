import { toast } from "react-toastify";
import { AuthContext } from "../../Authprovider/AuthProvider";
import useAxiousPublic from "../../Shared/useAxiousPublic";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const EditNote = () => {
    const { user } = useContext(AuthContext); // Get the logged-in user's info
    const axiousPublic=useAxiousPublic()
    const navigate=useNavigate()
    const [title1,settitle]=useState('')
    const [description1,setdescription]=useState('')
    const {id}=useParams()
    const [note,setnote]=useState([])
useEffect(()=>{
    axiousPublic.get(`/getssnote/${id}`)
    .then(res=>{
        setnote(res.data)
        console.log(res.data)
    })
},[id])
      const handleSubmit = async (event) => {
        event.preventDefault();
     ;
    
    
        const title = title1;
        const description = description1;
    
        const noteData = { title, description };
        console.log(noteData)
      const {data}=await axiousPublic.patch(`/updatenote/${id}`,noteData)
    console.log(data)
    if(data.acknowledged){
        navigate(-1)
      toast.success('note created  sucess')
    }
     
      }
    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Note</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email (Read-Only) */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              
              value={user?.email || ''}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
  
          {/* Title */}
          <div className="form-control">
            <label className="label">
                
              <span className="label-text">Title</span>
            </label>
            <input
            defaultValue={note?.title}
            onChange={(e)=>settitle(e.target.value)}
              type="text"
              name="title"
              placeholder="Enter note title"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
            onChange={(e)=>setdescription(e.target.value)}
            defaultValue={note?.description}
              name="description"
              placeholder="Enter note description"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>
  
          {/* Submit Button */}
          <div className="form-control mt-4">
            <button onClick={handleSubmit} type="submit" className="btn btn-primary w-full">
              Update Note
            </button>
          </div>
        </form>
      </div>
    );
  };

export default EditNote;