import css from './Options.module.css';

const Options = ({  }) => {
  return (
      <div className={css.button}>
      <button className={css.buttonGood}>Good</button>
      <button className={css.buttonNeutral}>Neutral</button>
      <button className={css.buttonBad}>Bad</button>
    </div>
  );
};

export default Options;
