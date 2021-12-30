## Portfolio with Reactjs

## Description

## Table of contents

- [Overview](https://#overview)
- [The challenge](https://#the-challenge)
- [Screenshot](https://#screenshot)
- [Links](https://#links)
- [My process](https://#my-process)
- [Built with](https://#built-with)
- [What I learned](https://#what-i-learned)
- [Author](https://#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page

![](Screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Reactjs
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learn about the following:

- How to use flexbox
- How to use CSS Grid
- How to use CSS custom properties
- How to use mobile-first workflow
- How to use React.useState
- How to use React.useEffect
- How to store the screen size in a state and use it directly in the layout

```Javascript
  const menuBar = toggleMenu ? "close-outline.svg" : "menu.svg";
  this is a conditional rendering of close icon or menu icon when the button is toggled
```

```css
.list-item a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.5px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 250ms ease-in;
}

.list-item a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

This is the line under the navbar when you hover it
```

```Javascript
Render the toggle button when the screen is smaller than 500px
 {(toggleMenu || screenWidth > 500) && (
    )}
```

## Author

- Website - [scriptsandtags.com](https://www.scriptsandtags.com/)
- Twitter - [@scriptsandtags](https://www.twitter.com/scriptsandtags)
# my-portfolio-with-react
