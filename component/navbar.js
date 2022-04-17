import gsap from "gsap";
import React,{ useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import '@popperjs/core'


function NavBar() {

    useEffect(()=>{
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
     const tl=gsap.timeline().fromTo(".logo",{scale:0,opacity:0},{scale:1,opacity:1,rotate:360,duration:2,ease:"bounce"})
                     .fromTo(".logo>span",{y:100},{y:0,duration:1})
                     .fromTo(".socials",{x:"120%"},{x:0,duration:1})    
    },[])


    return ( 
      <nav className="nav-bar">
        <div className="logo"><span className="fs-2">Food Discovery</span></div>

  <div className="socials d-flex m-4">
    <a href="#"><i class="bi bi-instagram fs-3 me-5"></i></a>
    <a href="#"><i class="bi bi-twitter fs-3 me-5"></i></a>
    <a href="#"><i class="bi bi-facebook fs-3 me-5"></i></a>
  </div>
        </nav>
     );
}

export default NavBar;