import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Skillbar from './skillbar';
import Skilldata from './skillsdata';
function Skills()
{
    useEffect(() => {
            AOS.init();  
        }, []);
    return (
        <div id="skills" className='skillsection' style={{marginTop:'50px'}}>
            <h2  data-aos="fade-right" style={{textAlign:'center',marginBottom:'40px','font-size':'35px'}}>My Skills</h2>
            <div className='skillbar'>
                {Skilldata.map((skill)=>
                <Skillbar skill={skill.name} level={skill.level} />
                )}
                </div>
        </div>
    )
}
export default Skills