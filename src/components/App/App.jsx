import './App.module.css';
import {useState } from 'react'
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';



const App = () => {
  const [{good, neutral, bad}, setClick] = userState(0)
  // const [{ good, neutral, bad }] = userState(0);
  
  return (
    <>
      <Description />
      <Options />
      <Feedback />

    </>
  );
};

export default App;
