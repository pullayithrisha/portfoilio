import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectData from './ProjectData';  

const Projects = () => {
    useEffect(() => {
        AOS.init(); 
    }, []);
    
    const sectionStyle = {
        backgroundColor: '#000',  
        color: '#fff',  
        paddingTop: '50px',
        paddingBottom: '50px',
    };

    const titleStyle = {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#FFD700',
        marginTop:'20px',
        marginBottom:'40px',
    };
    const cardStyle = {
        border: 'none',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: '#333', 
    };
    const cardBodyStyle = {
        padding: '20px',
    };

    const cardTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'rgb(80, 197, 232)',
    };

    const cardTextStyle = {
        fontSize: '1rem',
        color: '#ddd',
    };

    const listStyle = {
        margin: '0',
        padding: '0',
        listStyleType: 'none',
    };

    const listItemStyle = {
        fontSize: '0.9rem',
        color: '#ccc',
    };

    const btnPrimaryStyle = {
        backgroundColor: '#28a045', 
        width:'150px',
        height:'40px', 
        border: 'none',
        fontSize:'16px',
        padding: '10px 10px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white',  
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        marginTop: '8px',
    };
    return (
        <section id="projects" style={sectionStyle}>
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h2 data-aos="fade-right" style={titleStyle}>My Projects</h2>
                    </div>
                </div>
                <div className="row">
                    {ProjectData.map((project, index) => (
                        <div key={index} className="col-md-4 mb-4" data-aos="fade-up">
                            <div style={cardStyle} className="card shadow-sm border-light rounded">
                                <div style={cardBodyStyle}>
                                    <h5 style={cardTitleStyle}>{project.name}</h5>
                                    <p style={cardTextStyle}>{project.description}</p>
                                    <ul style={listStyle}>
                                        <li style={listItemStyle}>
                                            <strong>Tech Stack:</strong> {project.techstack.join(', ')}
                                        </li>
                                    </ul>
                                    <a
                                        href={project.link}
                                        style={btnPrimaryStyle}
                                        target="_blank"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
