
import React from 'react'
import './Works.css'
import theme from '../../assets/theme_pattern.svg'
import prj1 from '../../assets/1.jpg';
import prj2 from '../../assets/capture_20240925120211741.bmp';
import prj3 from '../../assets/capture_20240723172538605.bmp';
import prj4 from '../../assets/capture_20240723172706089.bmp';
import prj5 from '../../assets/capture_20240723172812825.bmp';
import prj6 from '../../assets/capture_20240723175232010.bmp';
import arrow from '../../assets/arrow_icon.svg'
function Works() {
  return (
    <div>
        <div className="works" id='works'>
            <div className="works__title">
                <h1>My latest work</h1>
                <img src={theme} alt="theme" />
                </div>
            <div className="works__container">
                <div className="workscard">
                    <img src={prj1} alt="" />
                </div>
                <div className="workscard">
                    <img src={prj2} alt="" />
                </div>
                <div className="workscard">
                    <img src={prj3} alt="" />
                </div>
                <div className="workscard">
                    <img src={prj4} alt="" />
                </div>
                <div className="workscard">
                    <img src={prj5} alt="" />
                </div>
                <div className="workscard">
                    <img src={prj6} alt="" />
                </div>
            </div>
            <div className="showmore">
                <p>Show More</p>
                <img src={arrow} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Works
