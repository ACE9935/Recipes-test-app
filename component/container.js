import React,{ useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import '@popperjs/core'
import datax from "./recipe-data";
import Link from "next/link";

function Container({children}) {
  return(
  <main className="main-content container-fluid">
   <div className="row">
  <nav className="navbar align-items-start navbar-expand-lg navbar-light bg-warning col-lg-3">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse position-sticky top-0 navbar-collapse flex-column p-3 p-lg-0" id="navbarNavAltMarkup">
      <p className="p-2 display-2 container-fluid">Contents</p>
      <div className="navbar-nav flex-column p-1 text-lg-right">
        <Link href={"/"}><a className="nav-link p-3 fs-lg" aria-current="page" href="#">Home</a></Link>
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className=" nav-link accordion-button collapsed p-3 pt-4 pb-4 fs-lg" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Recipes
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      {
          datax.map(o=><Link href={`/recipes/${o.dish}`}><a className="nav-link p-3 fs-lg" href="#">{o.dish}</a></Link>)
        }
      </div>
    </div>
  </div>
  </div>
        <a className="nav-link p-3 fs-lg" href="#">About</a>
      </div>
  </div>
</nav>
<section className="col-lg position-relative">
{children}
</section>
</div>
<style jsx>{`
         nav{
            box-shadow:0px 0.15rem 0.5rem 0rem black;
         }
         .collapse{
             overflow:auto;
             max-height:100vh;
         }
         .display-2{
             font-size:calc(4rem + 1.5vw) !important;
         }
         `}

        </style>
  </main>
  )
}

export default Container;