import './App.css';
import "./index.css";
import Header from './components/Header';
import Nav from './components/Nav';
import MainContainer from './pages/MainContainer';
import Footer from './components/Footer';
import { createContext, useState, useReducer } from 'react';
import { intitalState, reducer } from './components/reducer';
import { motion } from 'framer-motion';
import Switch from './components/Switch';

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
        <section className='row gap-3 p-0 mx-3'>
          <Switch />
          <article className='col-12 col-sm-12 col-md-2 col-lg-2 p-0'>
            <Header />
          </article>
          <article className='col-12 col-sm-12 col-md-8 col-lg-9 p-0'>
            <MainContainer />
          </article>
          <article className='col col-sm-12 col-md col-lg p-0'>
            <Nav />
          </article>
          <Footer />
        </section>
      </motion.section>
    </ThemeContext.Provider>
  );
}

export default App;
