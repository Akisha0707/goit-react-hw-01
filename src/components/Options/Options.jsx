import css from './Options.module.css';
import { useState, useEffect } from 'react'

const Options = () => {
  // const [clicks, setClicks] = useState({ good, neutral, bad });
  const [clicks, setClicks] = useState(0);

  const handleClick = (evt) => {
    setClicks (clicks + 1);
    console.log('hello');
  }
  
  return (
      <div className={css.button}>
      <button className={css.buttonGood} onClick={handleClick}>Good</button>
      <button className={css.buttonNeutral} onClick={handleClick}>Neutral</button>
      <button className={css.buttonBad} onClick={handleClick}>Bad</button>
    </div>
  );
};

export default Options;
