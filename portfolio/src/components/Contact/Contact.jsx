
import "./Contact.css"
import Phone from './contactImages/Phone.png'
import Email from './contactImages/Email.png'
import LinkedIn from './contactImages/LinkedIn.png'
import Github from './contactImages/Github.png'

function Contact() {

    const sendto = (link) => {
        window.open(
            link,
            "_blank"
        );
    }

    return (
        <div id='contact'>
            <h1>Contact <b>Me</b></h1>
            <div>
                <div id="contact-github" className='contactCard' onClick={() => { sendto("https://github.com/Coders6754") }}>
                    <img src={Github} alt="" />
                    <h5>Github</h5>
                    <p>Anjali-Sinha</p>
                </div>
                <div id="contact-linkedin" className='contactCard' onClick={() => { sendto("https://www.linkedin.com/in/anjali-sinha-60528b22b/") }}>
                    <img src={LinkedIn} alt="LinkedIn" />
                    <h5>Linkedin</h5>
                    <p>Anjali Sinha</p>
                </div>
                <div id="contact-email" className='contactCard'>
                    <img src={Email} alt="" />
                    <h5>Email</h5>
                    <p>asinha27072002@gmail.com</p>
                </div>
                <div id="contact-phone" className='contactCard'>
                    <img src={Phone} alt="" />
                    <h5>Phone</h5>
                    <p>+91 7249647735</p>
                </div>
            </div>
        </div>
    )
}

export default Contact