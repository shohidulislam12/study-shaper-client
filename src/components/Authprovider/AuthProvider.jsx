import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth/web-extension";


export const AuthContext=createContext(null)
const AuthProvider=({children})=>{
const [loading,setLoading]=useState(false)
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
  return signInWithPopup(auth,googleprovider)
}
const githubLogin=()=>{
  return signInWithPopup(auth, githubprovider)
}
const updateProfice=(name,photo)=>{
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
    console.log('currentuser',currentuser)
   await setUser(currentuser)
    } else {
    console.log('user loged out')
    }
  });
   ()=>{
return unsubscribe()
  }
  setLoading(false)
},[user])


    const authinf={
        user,creatuserUsingMailPass,signInWithMailPass,handlesignOut,googleLogin,githubLogin,updateProfice,setUser
    }
    console.log(user)
  return(
    <AuthContext.Provider value={authinf}>
    {children}
</AuthContext.Provider>
  )
}
export default AuthProvider