import React from 'react'

export default function Project(props) {
  return (
    <div className='project'>
      <img className='project-image' src={props.img} alt='logo' />

      <h3 className='title'>{props.title}
      </h3>

      <div className='description'>
        <p>{props.description}</p>
      </div>

      <div className='tech-stack'>
        <ul> {props.techstack} </ul>
      </div>
      <br />
       
    </div>
  );
}
