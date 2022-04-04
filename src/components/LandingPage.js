import { useEffect, useRef } from "react";

import { TweenMax, Power3 } from "gsap";

import gsap from "gsap";

import scrollDown from "./images/caret-down.svg";

import document from "./images/undraw_handcrafts_document.svg";
import computer from "./images/undraw_handcrafts_computer.svg";
import photo from "./images/undraw_handcrafts_photo.svg";

import svgarrow from "./images/undraw_handcrafts_mouse_arrow.svg";
import article from "./images/undraw_handcrafts_add_article.svg";
import phonehand from "./images/undraw_handcrafts_accept.svg";
import welcome from "./images/undraw_handcrafts_welcome.svg";

import React from "react";

export default function LandingPage() {
  let app = useRef(null);
  let content = useRef(null);
  let tl = gsap.timeline({ delay: 0.6 });

  // const boxRef = useRef();
  const el = useRef();
  const q = gsap.utils.selector(el);

  // useRef is a hook that allows you to store a reference to a DOM element in a React component.

  useEffect(() => {
    //  gsap.to(q(".hero-image"), { rotation: "+=360" });

    gsap.to(q(".hero-image"), {
      y: 100,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
  }, []);
  // Images Element

  useEffect(() => {
    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];
    const arrowButton = content.children[3];

    //Remove initial flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    //Content Animation

    tl.from(
      headlineFirst.children,
      1,
      { y: 20, opacity: 0, ease: Power3.easeOut },
      "+=0.2"
    );
    tl.from(
      headlineSecond.children,
      1,
      { y: 20, opacity: 0, ease: Power3.easeOut },
      1.5,
      " +=0.3"
    );
    tl.from(
      headlineThird.children,
      1.6,
      { y: 20, opacity: 0, ease: Power3.easeOut },
      1.7,
      "+=0.4"
    );
    tl.from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.8);
    tl.from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.8);
    tl.from(arrowButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.8);
  }, [tl]);

  return (
    <div className='hero' ref={(el) => (app = el)}>

      <div className='container'>

        <div className='hero-inner'>

          <div className='hero-content'>

            <div className='hero-content-inner' ref={(el) => (content = el)}>

              <h1 className='welcome-note'>

                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>
                    Hello, I am Seun
                  </div>
                </div>

                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>
                    I`m a front-end developer
                  </div>
                </div>

                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>
                    and visual storyteller.
                  </div>
                </div>

              </h1>

              <p className='hero-paragraph'>
                I will build beautiful and functional website that will drive up
                your reach and sales
              </p>

              <div className='btn-row'>

                <a className='scrollDownBtn' href='#experience'>
                  view my work{" "}
                  <img alt='' className='scrollicon' src={scrollDown} />
                </a>

              </div>

              <div className='arrow-row'>
                <img className='arrow' src={svgarrow} alt='arrow' />
              </div>

            </div>

          </div>

          <div className='hero-images'>

            <div ref={el} className='hero-images-inner'>

              <div className='hero-image three'>
                <img className='phonehand' src={phonehand} alt='girl' />
              </div>

              <div className='hero-image one'>
                <img className='computer' src={computer} alt='girl' />
              </div>

              <div className='hero-image four'>
                <img className='article' src={article} alt='boy' />
              </div>

              <div className='hero-image five'>
                <img className='photo' src={photo} alt='boy' />
              </div>

              <section>
                <div className='hero-image six'>
                  <img className='document' src={document} alt='boy' />
                </div>
              </section>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
