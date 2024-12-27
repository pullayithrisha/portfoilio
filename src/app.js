import './app.css';
import React, { useEffect } from 'react';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Education from './components/education';
import Skills from './components/skills'
import Projects from './components/projects';
import Contact from './components/contact';
function App(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="custom-font">
            <Header/>
            <Home/>
            <About/>
            <Education/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}
export default App;