import datax from "../../component/recipe-data";
import '@popperjs/core'
import React,{ useEffect } from "react";
import Image from "next/image"
const { motion, AnimatePresence } = require("framer-motion");
import {animation, animationChild} from '../../component/animation';

export const getStaticPaths = ()=>{
 const paths=datax.map(o=>{
     return{
         params:{recipe:o.dish}
     }
 })
 return{
     paths,
     fallback:true
 }
}

export const getStaticProps=({params})=>{
  if(!datax.filter(o=>o.dish==params.recipe).length){
    return{
      redirect:{
        destination:"/",
        permanent:false
      }
    }
  }
 return{
     props:{details:"ok",tx:params.recipe}
 }
}

export function RecipeDetails({tx}) {
 useEffect(()=>{
     
     const bootstrap=require("bootstrap/dist/js/bootstrap")
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    setTimeout(()=>{
     bootstrap.Toast.getOrCreateInstance(".toast").show()
    },500000)
    var toastList = toastElList.map(function (toastEl) {
      return new bootstrap.Toast(toastEl, {animation:true,autohide:true,delay:50000})
    })
 },[])
 if(!tx) return <div>ok</div>
 const recipe=datax.filter(o=>o.dish==tx)
 return(
  <AnimatePresence exitBeforeEnter>
  <motion.main
   key={recipe[0].dish}
    variants={animation}
    initial={"hidden"}
    animate={"visible"}
    exit={"hidden"}
   >
     <>
     
     <div role="alert" aria-live="assertive" aria-atomic="true" className="toast fs-sm m-sm-3 mt-3 position-absolute end-0" data-bs-autohide="true">
  <div className="toast-header">
    <strong className="me-auto fs-sm">Food Discovery</strong>
    <small className="fs-sm">small reminder</small>
    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div className="toast-body fs-base bg-light">
    Dontt forget to visit our <a href="#" className="text-warning">instagram</a> page for more delicious recipes
  </div>
</div>
    <section className="container-lg pt-4">
    <div className="clearfix">
    <div className="imgx col-md-5 me-md-4 float-md-start mb-3 ms-md-3 position-relative">
    <Image src={`/${recipe[0].images}`} placeholder="blur"  blurDataURL={`/${recipe[0].images}`} layout="fill" objectFit="cover" alt="..."/>
    </div>

  <div>
      <motion.div
       variants={animationChild}
      className="display-2 fw-bold">{recipe[0].dish}</motion.div>
      <p className="text-muted fs-base">Cooking time - {recipe[0].time}</p>
      <p className="text-danger fs-base">Ingredients - {recipe[0].ingredients}</p>
      <p className="fs-base lh-base">
      {recipe[0].method}
    </p>
  </div>
</div>
    </section>
    <style jsx>{`
     .imgx{
         height:30rem;
     }
     .display-2{
             font-size:calc(4rem + 1.5vw) !important;
         }
    `}
    </style>
     </>
     </motion.main>
     </AnimatePresence>
 )
}

export default RecipeDetails;