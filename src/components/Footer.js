import { Link } from "react-router-dom";
import "./Footer.css"
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Contact us</h4>
                            <ul>
                                <li><i className="fa-solid fa-location-dot"></i>Lorem, ipsum dolor.</li>
                                <li><i className="fa-solid fa-envelope"></i>Lorem, ipsum dolor.</li>
                                <li><i className="fa-solid fa-phone"></i>Lorem, ipsum dolor.</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Important links</h4>
                            <ul>
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Follow us</h4>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-youtube"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="copyright">
                    Copyright&#169;2022 - All Rights Reserved
                </div>
            </div>
        </>
    )
}

export default Footer;