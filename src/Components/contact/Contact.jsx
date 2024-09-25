import React from 'react'
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail from '../../assets/mail_icon.svg'
import call from '../../assets/call_icon.svg'
import location from '../../assets/location_icon.svg'
function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "90c9bb3b-34ee-40af-8db5-5260331e80a6");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
  return (
    <div>
        <div className="contact" id='contact'>
            <div className="contact__info">
            <h1>Get in Touch</h1>
            <img src={theme} alt="theme" />
            </div>
            <div className="contact-container">
            <div className="contact_left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact__icons">
                <div className="contact_details">
                <img src={mail} alt="mail-icon" /><p>arwazakria2003@gmail.com</p>
                </div>
                <div className="contact_details">
                <img src={call} alt="mail-icon" /><p>01279046015</p>
                </div>
                <div className="contact_details">
                <img src={location} alt="mail-icon" /><p>Egypt, Beni-Suef</p>
                </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact_right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your e-mail' name='email' />
                <label htmlFor="">Write Your Message Here!</label>
                <textarea name="message" id="" placeholder='Enter Your Message' rows="8"></textarea>
                <button className='submit' type='submit'>Submit now</button>                
            </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
