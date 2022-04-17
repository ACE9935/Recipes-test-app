import React,{ useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import '@popperjs/core'
import Link from "next/link"
import Image from "next/image"

function Card({title,time,recommended,imageUrl}){

  const display=recommended ?"d-block" :"d-none"
 return (
    <div className="col-sm-6 card m-2 bg-danger bg-gradient text-light">
  <div className="row">
  <Link href={`/recipes/${title}`}><div style={{cursor:'pointer'}} className="col-sm-4 position-relative">
    <Image src={`/${imageUrl}`} placeholder="blur"  blurDataURL={`/${imageUrl}`} layout="fill" objectFit="cover" alt="..."/>
    <span className={`position-absolute top-0 start-0 m-1 badge rounded-pill bg-info fs-sm ${display}`}>
    Recommended
  </span>
    </div></Link>
    <div className="col-sm-8">
      <div className="card-body">
        <h5 className="card-title fs-4">{title}</h5>
        <p className="card-text fs-base">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text fs-base">
        <Link href={`/recipes/${title}`}><button className="btn btn-primary fs-base d-block">Cook It !</button></Link>
        <small className="text-dark">Cooking time - {time}</small></p>
      </div>
    </div>
  </div>

  <style jsx>{`
   @media screen and (max-width:992px){
       .col-sm-4{
           height:23rem;
           width:100%;
       }
       .col-sm-8{
        width:100%;
    }
   }
   @media (min-width:567px){
    .col-sm-6{
        width:48%;
    }
}
   @media (min-width:992px){
    .col-sm-4{
        transform:rotate(-6deg);
    }
    .col-sm-4:hover{
        transform:scale(1.1);
    }
}
   `}
   </style>
</div>
 )
}

export default Card