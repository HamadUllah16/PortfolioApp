import './App.css';
import "./index.css";
import Header from './components/Header';
import Nav from './components/Nav';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import { createContext, useState, useReducer } from 'react';
import { intitalState, reducer } from './components/reducer';
import { motion } from 'framer-motion';

export const ThemeContext = createContext({
});

const greyish = "#ebeeec"
const white = "#ffffff"
const green = "#203A43"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    dispatch({ type: darkMode ? "LightMode" : "DarkMode" })
  };

  const [state, dispatch] = useReducer(reducer, intitalState);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, textColor: green, paneColor: greyish, bgColor: white, state, dispatch }}>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delayChildren: 0.2 }} className={`${darkMode ? "bgDark" : ""} App`}>
        <Header />
        <Nav />
        <MainContainer />
        <Footer />
      </motion.section>
    </ThemeContext.Provider>
  );
}

export default App;
