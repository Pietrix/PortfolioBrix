'use client'
import "./nav.css";
import React, { useState, useEffect} from 'react';

const Header2 = () => {
  const[show,setShow]= useState(false)

  function setHeader() {
    if (window.scrollY >= 400) {
      setShow(true)
    }
    else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

const handleScroll = () => {
    setHeader();
  }

  return (
    <header className={show ? 'headerShow' : 'headerHide'}>
      <div className={show ? 'wrapper wrapperShow' : 'wrapper'}>
      <nav>
        <ul>
          <li><a href="/Professional_duties"><img src="vierkant.svg"></img></a></li>
          <li><a href="/Situation-Orientation"><img src="pentagon.svg"></img></a></li>
          <li><a href="/Future-oriented_Organisation"><img src="driehoek.svg"></img></a></li>
          <li><a href="/Investigative_Problemsolving"><img src="cirkel.svg"></img></a></li>
          <li><a href="/Personal_Leadership"><img src="ster.svg"></img></a></li>
          <li><a href="/Targeted_Interaction"><img src="kruis.svg"></img></a></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header2;