import React, { useEffect, useState } from 'react';
import './nav.css'

function Nav() {
    const [show, setshow] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                setshow(true);
            }else{setshow(false)}
        });
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[]);
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img 
        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" 
        alt="Netflix-logo" 
        className="nav_logo" />
        <img src="https://w7.pngwing.com/pngs/64/431/png-transparent-amphibian-smiley-logo-happiness-font-square-shape-s-text-vertebrate-grass.png" 
        alt="" className="nav_avatar" />
      
    </div>
  );
}

export default Nav;
