import './App.css';
import "./index.css";
import Header from './components/Header';
import Nav from './components/Nav';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import { createContext, useState, useReducer } from 'react';
import { intitalState, reducer } from './components/reducer';
const greyish = "#ebeeec"
const white = "#ffffff"
const green = "#203A43"

export const ThemeContext = createContext({
  // darkMode: false,
  // textColor: green,
  // paneColor: greyish,
  // bgColor: white,
  // bgImage: bgDark
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    dispatch({ type: darkMode ? "LightMode" : "DarkMode" })
  };

  const [state, dispatch] = useReducer(reducer, intitalState);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, textColor: green, paneColor: greyish, bgColor: white, state, dispatch }}>
      <section className={`${darkMode ? "bgDark" : ""} App`}>
        <Header />
        <Nav />
        <MainContainer />
        <Footer />
      </section>
    </ThemeContext.Provider>
  );
}

export default App;
