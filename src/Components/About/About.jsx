import React from 'react'
import './About.css'
import myphoto from '../../assets/mypfoto.jpeg'
import theme from '../../assets/theme_pattern.svg'
const About = () => {
  return (
    <div>
      <div className="about" id='about'>
        <div className="about-title">
          <h1>About Me</h1>
          <img src={theme} alt="theme" />
        </div>
        <div className="about-section"> 
          <div className="about-left">
            <img src={myphoto} alt="myphoto" />
          </div>
          <div className="about-right">
            <div className="bio">
            <p>Hi, I'm Arwa Zakria, a passionate front-end developer with a keen eye for crafting responsive and user-friendly web interfaces. Currently in my final year at the Faculty of Computer Science, I have honed my skills in HTML, CSS, JavaScript, and React, with additional training through various courses like Udemy and ITI.</p><br/>
            <p> My projects reflect a strong focus on modern design principles, clean code, and seamless user experiences.
              As someone who thrives on learning and exploring new technologies, I'm excited about the opportunities to apply my expertise in React development to build impactful and dynamic web applications. I’m constantly looking for ways to enhance my skills and contribute to projects that push the boundaries of web development.</p>
            </div>
            <div className="about-skills">
              <div className="about-skill"><p>HTML&CSS</p><hr style={{width:"90%"}} /></div>
              <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}} /></div>
              <div className="about-skill"><p>Tailwind</p><hr style={{width:"80%"}} /></div>
              <div className="about-skill"><p>Bootstrap</p><hr style={{width:"85%"}} /></div>
              <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
