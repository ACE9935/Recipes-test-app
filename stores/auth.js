import { createContext } from "react"
import { useEffect, useState } from "react"
import  netlifyIdentity from "netlify-identity-widget"

const AuthContext=createContext({
 user:null,
 login: ()=>{},
 logout: ()=>{},
 authReady:false
})

export const AuthContextProvider = ({children})=>{
    const [user,setUser]=useState(null)

    useEffect(()=>{
     netlifyIdentity.on('login',(user)=>{
         setUser(user)
         netlifyIdentity.close()
         console.log("login event")
     })
     netlifyIdentity.init()
    },[])
    const login=()=>{
        netlifyIdentity.open()
    }

    return(
        <AuthContext.Provider value={{user,login}}>{children}</AuthContext.Provider>
    )
}

export default AuthContext