import "./Contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef,useState } from "react"
import emailjs from '@emailjs/browser'
import { ThemeContext } from "../../context"
const Contact=() =>{
    const formRef = useRef()
    const [done,setDone] =useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9re1nvk', 'template_hvcc2za', formRef.current, 'user_6tDnYRnSTJf3fLYVooA67')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="phoneicon" 
                            className="c-icon"/>
                            +92-3341106810
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="phoneicon" 
                            className="c-icon"/>
                            201617abdullah@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="phoneicon" 
                            className="c-icon"/>
                            Karachi,Pakistan
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref= {formRef} onSubmit={handleSubmit}>
                        <input type="text" 
                            placeholder="Name"
                            name="user_name"
                            style={{backgroundColor:darkMode && "#333"}}/>
                        <input type="text" 
                            placeholder="Subject"
                            name="user_subject"
                            style={{backgroundColor:darkMode && "#333"}}/>
                        <input type="text" 
                            placeholder="Email"
                            name="user_email" 
                            style={{backgroundColor:darkMode && "#333"}}/>
                        <textarea name="message" rows="5" 
                            placeholder="Message" 
                            style={{backgroundColor:darkMode && "#333"}}/>
                        <button>Submit</button>
                        {done && "Thankyou..."}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact