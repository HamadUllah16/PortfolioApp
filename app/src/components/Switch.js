import React, { useContext } from 'react';
import { ThemeContext } from '../App';

function Switch() {
  const { toggleDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <label className='toggleBG'>
        <input type='checkbox' onClick={toggleDarkMode} />
        <span className='circle'/>
      </label>
    </div>
  );
}

export default Switch;
