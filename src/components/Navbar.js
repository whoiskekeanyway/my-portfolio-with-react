import React from "react";
import logo from "./images/open-outline.svg";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  const menuBar = toggleMenu ? "close-outline.svg" : "menu.svg";

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  React.useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

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
              <a href='#aboutme'>about </a>
            </li>
            <li className='list-item'>
              <a href='#experience'>experience </a>
            </li>
            <li className='list-item'>
              <a href='#contact'>contact </a>
            </li>
            <li className='list-item'>
              <a href='https://blog.scriptsandtags.com/'>blog</a>
            </li>
          </ul>
        )}

        <img
          onClick={toggleNav}
          src={`./${menuBar}`}
          id='btn'
          className=''
          alt='logo'
        />
      </nav>
    </div>
  );
}
