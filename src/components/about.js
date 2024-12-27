import React, { useEffect } from 'react';
import 'aos/dist/aos.css';  
import AOS from 'aos';
import './about.css';
function About() {
    useEffect(() => {
        AOS.init(); 
      }, []);
    return (
        <section id="about">
            <h2 data-aos="fade-up">About Me</h2>
            <p className="aboutme" data-aos="fade-up">
                Hello, I'm P. Thrisha, a passionate web developer and 2nd-year B.Tech CSE student.<br />
                I specialize in creating interactive and visually appealing web applications.<br />
                With a good foundation in coding, I enjoy exploring new technologies and solving complex problems.<br />
                I'm an NCC cadet with B and C certificates, showcasing my discipline and leadership skills.<br />
                Outside of coding, I love meditating and spending quality time with my family.<br />
            </p>
        </section>
    );
}

export default About;
