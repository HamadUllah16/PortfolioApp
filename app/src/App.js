import './App.css';
import "./index.css";
import Header from './components/Header';
import Nav from './components/Nav';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';

function App() {
  return (
    <section className="App">
      <Header />
      <Nav />
      <MainContainer />
      <Footer />
    </section>
  );
}

export default App;
