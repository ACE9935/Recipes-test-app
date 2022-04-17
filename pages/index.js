import React,{ useEffect } from "react";
import datax from "../component/recipe-data"
import Card from "../component/card"

function Container() {
  return(
    <div className="container-md pt-3">
    <div className="row justify-content-center">
    {datax.map(o=>{
      return <Card title={o.dish} imageUrl={o.images} time={o.time} recommended={o.recommended}/>
    })}
   </div>
   </div>
  )
}

export default Container;