import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { About } from './components/About';
import { Projects } from "./components/Projects";
import Experience from './components/Experience';
import { Skills } from "./components/Skills";
import Profile from './components/Profile';
import Education from './components/Education';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Profile />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
