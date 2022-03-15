import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import AuthNav from "./AuthNav";
import '../index.css'; 

const AuthHeader = () => {
let refreshPage = () => {
    window.location.reload(false);
  }

  
  return (
    <>
      <div id="header-img">
   
   <Navbar fluid_id="navbar" variant="dark" className=" mb-2 pb-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-black h-2/5 bg-blue-200 border-b-8 border-indigo-700" id="navbar">
     <Navbar.Brand>
       &nbsp;
  
       &nbsp;
       
       <Link to="/" className="no-underline">
        <h1 id="header-title" className="font-Carattere pl-8 text-black pt-2 theme.extend.dropShadow font-black pb-2 text-6xl">Discover Numerology</h1>
       </Link>
       <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-28 top-8 z-30" />
       <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-40 top-8 z-30" />
       <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-52 top-8 z-30" />
       <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-64 top-8 z-30" />
       <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" id="lotus-1" />
       <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" id="lotus-2"/>
       <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" id="lotus-3"/>
       <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" id="lotus-4" />
       <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" id="lotus-5" />
       <br></br>
       <h2 id="quote">"All is number" -Pythagoras</h2>
     </Navbar.Brand>
     
     <Nav>
            <Nav.Item>  
              <button id="lifepath"><Link to="/LifePaths" className="bg-gradient-to-tr z-50 nav-link rounded-md text-black m-0 p-1 border-4 border-purple-700">
              <h3 id="h3" className=" ">Life Path Numbers</h3>
              </Link>
              </button>
            </Nav.Item>
            <Nav.Item>
            
            </Nav.Item>
            <AuthNav />
          </Nav>
        </Navbar>
        <img src="https://i.ibb.co/sP66HSd/ornella-binni-Uz-Vrysa-Nos-A-unsplash.jpg" id="pattern" alt="pattern" border="0" className="bg-cover h-screen"/>
        <img src="https://i.ibb.co/L1wgSjv/kasturi-roy-0a1b0-Vjzvw-A-unsplash.jpg" alt="pexels-vlada-karpovich-7903379-1" id="rock-img" className="h-screen"/>
        <img src="https://i.ibb.co/9bQMpZp/parrish-freeman-ec-Run-Ee-Mnd8-unsplash.jpg" alt="parrish-freeman-ec-Run-Ee-Mnd8-unsplash" id="water" className="h-screen"/>
      </div> 
    </>
  );
};

export default AuthHeader;