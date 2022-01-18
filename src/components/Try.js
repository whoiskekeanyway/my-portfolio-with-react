import React from "react";
import { gsap } from "gsap";

export default function Try() {
  const { useEffect, useRef, forwardRef } = React;
  // store a reference to the box div
  const Box = forwardRef(({ children }, ref) => {
    return (
      <div className='box' ref={ref}>
        {children}
      </div>
    );
  });

  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();

  useEffect(() => {
    const boxes = [box1.current, box2.current, box3.current];

    // Target the two specific elements we have forwarded refs to
    gsap.to(boxes, {
      x: 10,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
  }, []);

  return (
    <div className='app'>
      <Box ref={box1}>Box</Box>
      <Box ref={box2}>Box</Box>
      <Box ref={box3}>Box</Box>
    </div>
  );
}
