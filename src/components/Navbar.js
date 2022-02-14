import React from "react";
import logo from "./images/open-outline.svg";
import linkedin from "./images/logo-linkedin.svg";
import github from "./images/logo-github.svg";
import twitter from "./images/logo-twitter.svg";

export default function Navbar() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  // toggle between two images for the menu bar in mobile devices
  // ? is a ternary operator
  // : is a ternary operator
  const menuBar = toggleMenu ? "close-outline.svg" : "menu.svg";

  // toggle the menu bar
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  //
  React.useEffect(() => {
    // Screen size change event listener
    // it will store the screen size in the state variable screenWidth and update it
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    // remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div>
      <nav className='navbar'>
        <a href='index'>
          <img src={logo} className='App-logo' alt='logo' />
        </a>

        {(toggleMenu || screenWidth > 500) && (
          <ul className='nav-list'>
            <li className='list-item'>
              <a href='#bio'>about </a>
            </li>
            <li className='list-item'>
              <a href='#experience'>experience </a>
            </li>
            <li className='list-item'>
              <a href='#contact'>contact </a>
            </li>
            <li className='list-item'>
              <a
                onClick={() => openInNewTab("https://blog.scriptsandtags.com/")}
                rel='noreferrer noopener'
                target='_blank'
                id='blog'
              >
                blog
              </a>
            </li>
          </ul>
        )}
      </nav>

      <img
        onClick={toggleNav}
        src={`./${menuBar}`}
        id='btn'
        className=''
        alt='logo'
      />

      <ul className='extra'>
        <li className='list-extra'>
          <a
            rel='noreferrer noopener'
            target='_blank'
            href='https://www.linkedin.com/in/seunogundele/'
          >
            <img src={linkedin} className='App-logos' alt='logo' />
          </a>
        </li>
        <li className='list-extra'>
          <a
            rel='noreferrer noopener'
            target='_blank'
            href='https://www.twitter.com/scriptsandtags'
          >
            <img src={twitter} className='App-logos' alt='logo' />
          </a>
        </li>
        <li className='list-extra'>
          <a
            rel='noreferrer noopener'
            target='_blank'
            href='https://github.com/whoiskekeanyway'
          >
            <img src={github} className='App-logos' alt='logo' />
          </a>
        </li>
      </ul>
    </div>
  );
}
