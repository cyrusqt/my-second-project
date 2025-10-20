import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './Pages/Profile';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Profile />
        <About />
        <Contact />
      </header>
    </div>
  );
}

export default App;
