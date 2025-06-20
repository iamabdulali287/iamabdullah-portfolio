import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import './index.css'
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
 <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
  
      <Navbar />
      <Hero />
      <Education/>
   
      <Skills/>
      
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
