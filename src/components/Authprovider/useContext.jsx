import { Children, createContext } from "react";

export const AuthContext=createContext([])
const AuthProvider=({children})=>{
    const authinf={
        name:'asif'
    }
  return(
    <AuthContext.Provider value={authinf}>
    {children}
</AuthContext.Provider>
  )
}
export default AuthProvider