
export default function Project(props) {
  return (
    <div className='projects'>
      <img className='project-image' src={props.img} alt='logo' />

      <h3 className='title'>{props.title}</h3>

      <div className='description'>
        <p>{props.description}</p>
      </div>

      <div className='tech-stack'>
        <ul> {props.techstack} </ul>
      </div>
   
      <a href={props.url} target='_blank' rel='noreferrer'>
        <button className='project-button'>Live Demo</button>
      </a>
    </div>
  );
}
