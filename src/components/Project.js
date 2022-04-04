export default function Project(props) {
  return (
    <div className='project'>
      <section className='projects-links-section'>
        <p className='title'>{props.title}</p>
        <img className='project-image' src={props.img} alt='logo' />
      </section>

      <section className='project-words-section'>
        <p className='description'>{props.description}</p>
        <p className='tech-stack'> {props.techstack} </p>
  </section>
        <section className='project-links'>
          <a> {props.link} </a>
          <a> {props.livelink} </a>
        </section>
    
    </div>
  );
}
