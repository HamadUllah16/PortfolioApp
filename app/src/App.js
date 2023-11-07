import './App.css';
import "./index.css";
import Header from './components/Header';
import Nav from './components/Nav';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <section className="App">
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <Header />
        <Nav />
        <MainContainer />
        <Footer />
      </ThemeContext.Provider>
    </section>
  );
}

export default App;
