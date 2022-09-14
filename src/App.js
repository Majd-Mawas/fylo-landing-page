import './index.css'
import Nav from './components/Nav';
import Intero from './components/Intero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Intero/>
      <Features/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
