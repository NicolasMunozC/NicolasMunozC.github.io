import {useRef, useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import SocialBar from './components/SocialBar';
import UpButton from './components/UpButton';

function App() {

  const [topButton, setTopButton] = useState(true)

    const contactRef = useRef(null)
    const topRef = useRef(null)

    const scrollToRef = (ref, extra) => {
      window.scrollTo({
        top: ref.offsetTop - extra,
        left: 0,
        behavior: "smooth",
      })
    }

  return (
    <div className="App" ref={topRef}>

      <NavBar contactRef={contactRef} scrollToRef={scrollToRef} setTopButton={setTopButton} />
      <Banner contactRef={contactRef} scrollToRef={scrollToRef}/>
      <Skills />
      <Projects />
      <Contact contactRef={contactRef}/>
      <Footer />
      <SocialBar contactRef={contactRef} scrollToRef={scrollToRef} />
      <UpButton topButton={topButton} scrollToRef={scrollToRef} topRef={topRef} />
    </div>
  );
}

export default App;
