import { useState } from 'react';
import Garland from './components/Garland';
import './styles/App.scss';

function App() {
  const balls = 8;
  const [lightSpeed, setLightSpeed] = useState(2)

  function turnOnLights() {
    document.querySelector('.garland__wrapper').classList.add('on')
  }

  function turnOffLights() {
    document.querySelector('.garland__wrapper').classList.remove('on')
    setLightSpeed(2)
  }

  function changeSpeed(e) {
    setLightSpeed(e.target.value)
    document.documentElement.style.setProperty('--anim-duration', `${1/(lightSpeed/2)}s`)
  }

  return (
    <div>
      <Garland balls={balls} />
      <h1>Christmas Lights</h1>
      <div className="control__wrapper">
        <button className="control__on" onClick={turnOnLights}>On</button>
        <button className="control__off" onClick={turnOffLights}>Off</button>
        <div className="control__speed__wrapper">
          <div className="control__speed__label">
            Speed:&nbsp;
          </div>
          <input type="range" min='1' max='10' value={lightSpeed} onChange={changeSpeed} />
          <span>{lightSpeed}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
