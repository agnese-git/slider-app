import React from 'react';
import styled from 'styled-components';
import './components/Slider/Slider.css';
import Slider from './components/Slider/Slider';


const Styles = styled.div`
display: flex;
align-items: center;
color: #888;
margin-top: 2rem;
margin-bottom: 2rem;

`;

function App() {
  return (
<>
  <header style={{marginTop: '60px'}}>
    <h1>Choose your favorite slider!</h1>
  </header>
  <main className="slider">  
   <Styles>
    <div className="wrap">
      <ul className="a">
        <li className="first">Select a number from 0 to 1000<Slider/> </li>
        <li className="second">Select a number from 0 to 1000<Slider/> </li>
        <li className="third">Select a number from 0 to 1000<Slider/> </li>
      </ul>
    </div>
   </Styles> 
  </main>
</>
  );
}

export default App;
