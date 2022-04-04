export default function Project(props) {
  return (
    <div className='project'>
      <section className='projects-links-section'>
        <h3 className='title'>{props.title}</h3>
        <img className='project-image' src={props.img} alt='logo' />
      </section>

      <section className='project-words-section'>
        <p className='description'>{props.description}</p>
        <p className='tech-stack'> {props.techstack} </p>

        <section className='project-links'>
          <a> {props.link} </a>
          <a> {props.livelink} </a>
        </section>
        
      </section>
    </div>
  );
}
