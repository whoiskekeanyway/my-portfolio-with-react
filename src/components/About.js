import React from "react";

export default function About() {
  return (
    <div className='about-page'>
      <div>
        <p className='biography'>
          My name is ‘Seun, a web developer, photographer, and a lover of dogs
          and plants. My passion for web development stems from my background in
          photography and my love for good UX/UI design, which has helped in the
          delivery of some beautiful projects. I create attractive and
          functional websites and solve clients’ problems using modern
          technologies. My creativity allows me to view things differently and
          approach them with a different mindset.
        </p>

        <p className='biography'>
          I am a team player who is very hands-on and quick on his feet. I also
          have no problems taking charge of situations that lack proper
          direction. I go over and beyond to provide customer satisfaction. I am
          very organized, self-motivated, and full of ambition. Results matter
          to me a lot, so I have no problems communicating what I mean and how I
          feel in a bid to execute successful projects. I am dependable and very
          resourceful. In essence, I am open to business and collaborations.
        </p>

        <p className='biography'>
          I am also a visual storyteller and you can see some of my project here
          <a
            className='reference'
            aria-hidden='true'
            rel='noopener'
            href='https://postcardwithnotes.com/'
          >
            Postcardwithnotes.com
          </a>
        </p>
      </div>
    </div>
  );
}
