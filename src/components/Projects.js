import React from "react";
import Project from "./Project";
import hashtag from "./images/build.svg";
import camera from "./images/camera.svg";
import medkit from "./images/medkit.svg";
import calculator from "./images/calculator.svg";

export default function Projects() {
  return (
    <div>
      <section id='experience' className='projects-section'>
        <Project
          img={hashtag}
          title='Hashtag Generator'
          description='As a photographer, I sometimes struggle to get the best hashtags for a post. The hashtag is a big part of getting better traction with your content and I decided to make a lightweight app for hashtags.'
          techstack='HTML, CSS, JavaScript'
        />
        <Project
          img={camera}
          title='Photograher Portfolio'
          description=' My photography portfolio; I used my website for photography to practice. I made a carousel with vanilla javascript. It made loading many photos on the website easier without taking so much space.'
          techstack='HTML, CSS, JavaScript'
        />
        <Project
          img={medkit}
          title='Improved Happiness'
          description='Design is a big part of web development. I am learning Figma to get much better in design. I saw a design about mental health website on Twitter, and I decided to build it; it is fully responsive.'
          techstack='HTML, CSS, JavaScript'
        />
        <Project
          img={calculator}
          title='Tip Calculator'
          description='This project is from front-end-masters; it was easy for me because I had built a similar app from Bootcamp. It made me understand why it matters to create, and it is the best way to learn'
          techstack='HTML, CSS, JavaScript'
        />
        <Project
          img={calculator}
          title='The Bull House'
          description='This project is from front-end-masters; it was easy for me because I had built a similar app from Bootcamp. It made me understand why it matters to create, and it is the best way to learn'
          techstack='HTML, CSS, JavaScript'
        />
        <Project
          img={calculator}
          title='The Bull House'
          description='This project is from front-end-masters; it was easy for me because I had built a similar app from Bootcamp. It made me understand why it matters to create, and it is the best way to learn'
          techstack='HTML, CSS, JavaScript'
        />
      </section>
    </div>
  );
}
