import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth/web-extension";



export const AuthContext=createContext(null)
const AuthProvider=({children})=>{
const [loading,setLoading]=useState(true)
const [user,setUser]=useState(null)
const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();




const creatuserUsingMailPass=(email, password)=>{
  setLoading(true)
 return createUserWithEmailAndPassword(auth, email, password)
}
const signInWithMailPass=(email, password)=>{
  setLoading(true)
 return signInWithEmailAndPassword(auth, email, password)
}
const googleLogin=()=>{
  setLoading(true)
  return signInWithPopup(auth,googleprovider)
}
const githubLogin=()=>{
  setLoading(true)
  return signInWithPopup(auth, githubprovider)
}
const updateProfice=(name,photo)=>{
  setLoading(true)
 return updateProfile(auth.currentUser, {
  displayName:name, photoURL:photo
})
}
const handlesignOut=()=>{
  setLoading(true)
  signOut(auth).then(() => {
   console.log('sign out succsss')
  }).catch((error) => {
   console.log('error happen ')
  });
  
}

useEffect(()=>{
const unsubscribe=  onAuthStateChanged(auth,async (currentuser) => {
    if (currentuser) {

    console.log('currentuseris',currentuser.displayName)
   setUser(currentuser)

    } else {
    console.log('user loged out')
    setUser(null)
    }
    setLoading(false)
  });
  
  
return ()=> unsubscribe()
  

},[user])


    const authinf={
        user,creatuserUsingMailPass,signInWithMailPass,handlesignOut,googleLogin,githubLogin,updateProfice,setUser,loading
    }
    console.log(user)
  return(
    <AuthContext.Provider value={authinf}>
    {children}
</AuthContext.Provider>
  )
}
export default AuthProvider