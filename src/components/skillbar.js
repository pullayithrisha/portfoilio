import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Skillbars({ skill, level }) {
    useEffect(() => {
        AOS.init();  
    }, []);

    const getcolor = () => {
        if (level >= 75) return 'rgb(65, 129, 77)';  
        else if (level > 50) return 'rgb(220, 122, 24)';  
        else return 'rgb(250, 32, 32)';  
    };

    const styling = {
        width: `${level}%`,
        height: 28,
        backgroundColor: getcolor(),
        borderRadius: 15,
        color: 'black',  
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '15px',
        border: 'solid black 2px',
        padding: '1px 0 1px 0px',
        marginLeft: '20px'
    };

    return (
        <div style={{ marginBottom: 15 }}> 
            <div data-aos="fade-right" style={styling}>
                {skill} - {level}%
            </div>
        </div>
    );
}

export default Skillbars;
