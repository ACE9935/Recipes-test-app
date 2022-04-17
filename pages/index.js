import React,{ useEffect, useContext } from "react";
import datax from "../component/recipe-data"
import Card from "../component/card"
import  AuthContext from "../stores/auth";

function Container() {
  const {user,login}=useContext(AuthContext)
  return(
    <div className="container-md pt-3">
    <div className="row justify-content-center">
      <li onClick={login}>login/Sign up</li>
    {datax.map(o=>{
      return <Card title={o.dish} key={o.id} imageUrl={o.images} time={o.time} recommended={o.recommended}/>
    })}
   </div>
   </div>
  )
}

export default Container;