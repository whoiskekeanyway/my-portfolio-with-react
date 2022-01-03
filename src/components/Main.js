import React from "react";

import scrollDown from "./images/caret-down.svg";


export default function Landing() {
  return (
    <>
      <div className='landing-page'>
        <div className='landingMessage'>
          <h1 className='landingTitle'>
            Hi, My name is Seun,
            <br /> I am a <span>Front-end Developer</span>
          </h1>
          <p className='landingParagraph'>
            I design beautiful and functional websites that solve problems using
            modern technologies.
          </p>
          <div className='scrollContainer'>
            <a className='scrollDownBtn' href='#experience'>
              View My Work
              <img alt='' className='scrollicon' src={scrollDown} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
