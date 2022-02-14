import { useEffect, useRef } from "react";
import developer from "./images/developer.svg";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import { gsap } from "gsap";
import React from "react";

export default function About() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  let image = useRef(null);
  let paragraph = useRef(null);
  let tl = new TimelineLite({ delay: 0.6 });

  useEffect(() => {
    const paragraphyWords = paragraph.children;
    const images = image;

    tl.from(
      paragraphyWords,
      1.2,
      { x: 200, opacity: 0, ease: Power3.easeOut },
      "Start"
    ).from(
      paragraphyWords.firstElementChild,
      2,
      { scale: 0.8, ease: Power3.easeOut },
      0.2
    );

    tl.from(
      images,
      1.2,
      { x: -300, opacity: 0, ease: Power3.easeOut },
      "Start"
    ).from(
      images.firstElementChild,
      2,
      { scale: 0.8, ease: Power3.easeOut },
      0.2
    );
  }, [tl]);

  return (
    <div className='about'>
      <div id='bio' className='about-page'>
        <div className='image-div' ref={(el) => (image = el)}>
          <img className='developer' src={developer} alt='developer' />
        </div>

        <div className='words-div' ref={(el) => (paragraph = el)}>
          <p className='biography'>
            My name is ‘Seun, a web developer, photographer, and a lover of dogs
            and plants. My passion for web development stems from my background
            in photography and my love for good UX/UI design, which has helped
            in the delivery of some beautiful projects. I create attractive and
            functional websites and solve clients’ problems using modern
            technologies. My creativity allows me to view things differently and
            approach them with a different mindset.
          </p>

          <p className='biography'>
            I am a team player who is very hands-on and quick on his feet. I
            also have no problems taking charge of situations that lack proper
            direction. I go over and beyond to provide customer satisfaction. I
            am very organized, self-motivated, and full of ambition. Results
            matter to me a lot, so I have no problems communicating what I mean
            and how I feel in a bid to execute successful projects. I am
            dependable and very resourceful. In essence, I am open to business
            and collaborations.
          </p>

          <p className='biography'>
            I am also a visual storyteller and you can see some of my project
            here
            <a
              onClick={() => openInNewTab("https://postcardwithnotes.com/")}
              className='reference'
              aria-hidden='true'
              rel='noopener'
            >
              postcardwithnotes.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
