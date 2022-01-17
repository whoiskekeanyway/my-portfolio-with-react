import React from "react";
import heroimage from "./images/build.svg"

import scrollDown from "./images/caret-down.svg";

export default function Landing() {
  return (
    <div className='landing-page'>
      <div className='landingMessage'>
        <section className='landing'>
          <img alt='' className='scrollicons' src={heroimage} />
          </section>
        <p className='landingTitle'>Hi, I`m Seun,</p>
        <p className='landingSubtitle'>
          I am a front-end developer and visual storyteller.
        </p>
        <p className='landingParagraph'>
          Designing and building digital products that solve problems using
          modern technologies and creating positive experiences.
        </p>
        <div className='scrollContainer'>
          <a className='scrollDownBtn' href='#experience'>
            View My Work
            <img alt='' className='scrollicon' src={scrollDown} />
          </a>
        </div>
      </div>
    </div>
  );
}
