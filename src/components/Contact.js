import "./Contact.css";
import contactbanner from "../images/ContactBanner.png";
import map from "../images/map.png";
function Contact(){
    return(
        <>
            <div className="contact-container">
        <div className="heading">
            <div className="head">
                <h1>Contact</h1>
            </div>
            <div className="shadowOpacity"></div>
            <img src={contactbanner} alt=""/>
        </div>

        <div className="wrapper">
            <div className="box2 box">
                <h1>Visit Our Location</h1>
                <ul>
                    <li><i className="fa-solid fa-location-dot"></i> Delhi, india, 589754</li>
                    <li><i className="fa-solid fa-envelope"></i> example123@gmail.com</li>
                    <li><i className="fa-solid fa-phone"></i> +91-1234567895</li>
                </ul>
            </div>
            <div className="box1 box">
                <img src={map} alt="" />
            </div>
        </div>

        <div className="registration_form_area">
            <div className="registration_form">
                <div className="title">
                    Contact Us
                </div>
                <div className="form">
                    <form action="">
                        <div className="input_field">
                            <label for="fname">Email</label>
                            <input type="email" name="" id="fname" className="input"/>
                        </div>

                        <div className="input_field">
                            <label for="lname">Subject</label>
                            <input type="text" name="" id="lname" className="input"/>
                        </div>

                        <div className="input_field">
                            <label for="address">Description</label>
                            <textarea name="" id="address" cols="15" rows="4" className="input"></textarea>
                        </div>

                        <div className="submit_button">
                            <input type="button" value="Submit" className="btn"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Contact;