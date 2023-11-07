import React, { useReducer } from 'react'
import { INITAL_STATE, reducer } from './reducer'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function Switch() {
    const [state, dispatch] = useReducer(reducer, INITAL_STATE);
    const {setDarkMode,darkMode} = useContext(ThemeContext);

    function switchTheme(){
        setDarkMode(!darkMode);
        dispatch({type: darkMode ? "LightMode" : "DarkMode"});
    }
    return (
        <div>
            <label className='toggleBG'>
                <input type='checkbox'
                onClick={switchTheme}
                />
                <span className='circle' />
            </label>
            <div>
                <p style={{color: state.textColor}}>Text</p>
            </div>
        </div>
    )
}

export default Switch
