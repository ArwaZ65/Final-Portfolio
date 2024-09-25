import React from 'react'
import './Services.css'
import theme from '../../assets/theme_pattern.svg'
import data from '../../assets/services_data.js'
import arrow from '../../assets/arrow_icon.svg'
function Services() {
  return (
    <div className='services' id='services'>
        <div className="service-title">
            <h1>My Services</h1>
            <img src={theme} alt="theme" />
        </div>
        <div className="service-container">
          {data.map((item, index) => {
            return <div key={index} className="card1" style={{width:'380px'}}>
                <h3 style={{fontWeight:'bold'}}>{item.s_no}</h3>
                <h2>{item.s_name}</h2>
                <p>{item.s_desc}</p>
                <div className="read-more">
                  <p>Read More</p>
                <img src={arrow} alt="arrow icon" />
                </div>
              </div>
          })}
    </div><br />
    </div>
  )
}

export default Services
