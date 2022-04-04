import React from "react";
// import { gsap } from "gsap";

export default function Contacts() {
  return (
    <div className='main-contact'>
      <section className='contact-container'>
        <div>
          <h1 className='contact-intro'>Contact</h1>
          <div className='contact' id='contact'>
            <p className='contact-words'>
              I'm looking for an entry-level front-end role with mentorship and
              room to grow.If you think I`d be a good fit for your team,
              <a
                className='contact-reference'
                href='mailto:whoiskekeanyway@outlook.com'
              >
                shoot me an email
              </a>
              and let`s chat.
            </p>
          </div>
        </div>

        <form
          name='portfolio-form'
          method='POST'
          data-netlify='true'
          className='social-icon'
        >
          <input type='hidden' name='form-name' value='portfolio-form' />
          <label for='fname'> Name</label>
          <input type='hidden' name='form-name' value='contact-form' />
          <input type='text' placeholder='Enter Your name' name='name' />
          <label for='lname'>Email Address</label>
          <input type='text' placeholder='Enter Your email' name='email' />
          <label  for='subject'>
            Message?
          </label>
          <textarea
            className='textarea'
            placeholder='Enter Your message'
            name='message'
          ></textarea>
          <button className='submit-button'>Submit</button>
        </form>
      </section>
    </div>
  );
}
