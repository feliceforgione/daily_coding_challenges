/* Create an image slider that has 4 buttons:

Prev - show previous picture

Next - show next picture

Play - slide pictures in circular way with intervals of some seconds

Stop - stop slider */

import { useReducer, useRef } from "react";
import "./App.css";

const TIMEOUT = 1000;

const SLIDES = [
  "http://picsum.photos/id/10/300/100",
  "http://picsum.photos/id/20/300/100",
  "http://picsum.photos/id/30/300/100",
  "http://picsum.photos/id/40/300/100",
];

const Controls = ({ handleSlide }: { handleSlide: React.Dispatch<string> }) => {
  const intervalId = useRef<number>(-1);
  function handlePlay() {
    if (intervalId.current == -1)
      intervalId.current = setInterval(() => handleSlide("next"), TIMEOUT);
  }

  function handleStop() {
    clearInterval(intervalId.current);
    intervalId.current = -1;
  }
  return (
    <div className="controls">
      <button onClick={() => handleSlide("prev")}>Prev</button>
      <button onClick={() => handleSlide("next")}>Next</button>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

interface ISlideProps {
  slideNumber: number;
}

const Slide = ({ slideNumber }: ISlideProps) => (
  <img src={SLIDES[slideNumber]} />
);

function reducer(state: number, action: string) {
  const numSlides = SLIDES.length - 1;
  switch (action) {
    case "prev": {
      if (state === 0) return numSlides;
      return state - 1;
    }
    case "next": {
      if (state === numSlides) return 0;
      return state + 1;
    }
    default:
      return state;
  }
}

function App() {
  const [currentSlide, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <Slide slideNumber={currentSlide} />
      <Controls handleSlide={dispatch} />
    </>
  );
}

export default App;
