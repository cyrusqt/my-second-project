import './App.css';
import Navbar from './components/Navbar';
import Profile from './Pages/Profile';
import About from './Pages/About';
import Contact from './Pages/Contact';
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="profile">
        <Profile />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
