import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['JavaScript', 'HTML', 'CSS', 'React', 'Node JS'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgCon">
          <img src="assets/man3a.png" alt="" className="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Seng Vang</h1>
          <h3>
            Developer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
