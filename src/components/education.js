import React, { useEffect } from 'react';
import 'aos/dist/aos.css';  
import AOS from 'aos';
import './education.css'; // Assuming your styles are in education.css
import BTechImage from '../assets/cbit.jpg'; // Replace with your actual image paths
import DiplomaImage from '../assets/gptc.jpg'; 
import SSCImage from '../assets/MMS.jpg';

function Education() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <section id="education" className="education-section">
      <h2 data-aos="zoom-in">Education</h2>
      <div className="education-cards-container">
        <div className="education-card" data-aos="zoom-in" data-aos-delay="100">
          <img 
            src={BTechImage} 
            className="education-card-img" 
            alt="B.Tech in Computer Science" 
          />
          <div className="education-card-body">
            <h5 className="education-card-title">B.Tech</h5>
            <p className="education-card-text">Bachelor of Engineering in CSE<br />CBIT, Gandipet</p>
          </div>
          <div className="education-card-footer">
            <small className="education-text-muted">2024-present</small>
          </div>
        </div>

        <div className="education-card" data-aos="zoom-in" data-aos-delay="200">
          <img 
            src={DiplomaImage}
            className="education-card-img" 
            alt="Diploma in Computer Science" 
          />
          <div className="education-card-body">
            <h5 className="education-card-title">Diploma</h5>
            <p className="education-card-text">Diploma in Computer Science Engineering<br />GPTC, Masab Tank</p>
          </div>
          <div className="education-card-footer">
            <small className="education-text-muted">2021-2024</small>
          </div>
        </div>

        <div className="education-card" data-aos="zoom-in" data-aos-delay="300">
          <img 
            src={SSCImage}
            className="education-card-img" 
            alt="Secondary School Certificate" 
          />
          <div className="education-card-body">
            <h5 className="education-card-title">SSC</h5>
            <p className="education-card-text">Medha Moral School<br />Manjulapur,Nirmal</p>
          </div>
          <div className="education-card-footer">
            <small className="education-text-muted">2021</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
