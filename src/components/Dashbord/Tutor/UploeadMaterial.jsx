import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Authprovider/AuthProvider';
import { useParams } from 'react-router-dom';
import useAxiousPublic from '../../Shared/useAxiousPublic';
import { photoURL } from '../../Shared/Sheared';
import { toast } from 'react-toastify';

const UploeadMaterial = () => {
    const {id}=useParams()
    const axiousPublic=useAxiousPublic()
    const [image,setImage]=useState(null)
    const {user}=useContext(AuthContext)
     const [session,setsession]=useState([])
     useEffect(()=>{
        axiousPublic.get(`/session/${id}`)
        .then(res=>{
            setsession(res.data)
           // console.log(res.data)
        })
    },[id])
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const links=e.target.link.value
        const linkarray=links.split(',')
        const photolinks=e.target.image.value
        const photolinkarray=photolinks.split(',')
       
         const noteData={
            teacherEmail:user.email,
            sessionId:id,
    
            linkarray,photolinkarray,
            
sessionTitle:
session.sessionTitle

         }
         //console.log(noteData)
        
       const {data}=await axiousPublic.post('/allmaterial',noteData)
  //   console.log(data)
     if(data.acknowledged){
       toast.success('Material created  sucess')
     }
      
       }

    
  //  console.log(session)
    return (
     <div className='min-h-screen py-10 dark:bg-black   dark:text-white'>
   <div className="max-w-xl mx-auto p-6 dark:bg-gray-500 dark:text-white bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Upload Study Material</h2>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required 
              value={session.sessionTitle}
              readOnly
              placeholder="Enter title"
              className="input dark:text-black input-bordered w-full"
            />
          </div>
  
          {/* Study Session ID */}
          <div className="mb-4">
            <label
              className="block  text-sm font-medium mb-1"
              htmlFor="studySessionId"
            >
              Study Session ID
            </label>
            <input
              type="text"
              id="studySessionId"
              name="studySessionId"
              value={session._id}
              readOnly
              className="input dark:text-black input-bordered w-full bg-gray-100"
            />
          </div>
  
          {/* Tutor Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="tutorEmail">
              Tutor Email
            </label>
            <input
              type="email"
              id="tutorEmail"
              name="tutorEmail"
              value={user.email}
              readOnly
              className="input dark:text-black input-bordered w-full bg-gray-100"
            />
          </div>

  
          {/* image Link */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="link">
              Image Link (separate by comma)
            </label>
            <textarea
              type="link"
              id="image"
              name="image"
              required
              placeholder="Enter Google Drive link by comma "
              className="input dark:text-black input-bordered w-full"
            />
          </div>
          {/* Link */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="link">
              Resource Link (separate by comma)
            </label>
            <textarea
              type="link"
              id="link"
              name="link"
              required
              placeholder="Enter Google Drive link by comma "
              className="input dark:text-black input-bordered w-full"
            />
          </div>
  
          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Upload Material
          </button>
        </form>
      </div>
     </div>
    );
  };
export default UploeadMaterial;