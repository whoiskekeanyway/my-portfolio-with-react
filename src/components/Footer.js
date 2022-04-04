import React from "react";

export default function Footer() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className='footer'>
      <div className='footerDiv'>
        <p className='copyright'>
          &copy; <span className='year'></span>
          All Rights Reserved <a href='/'>Seun Ogundele</a>
        </p>

        <a
          onClick={() => openInNewTab(`https://www.pixelsinframe.com/`)}
          className='designerp'
        >
          made with love by pixelsinframe.com
        </a>
      </div>
    </div>
  );
}
