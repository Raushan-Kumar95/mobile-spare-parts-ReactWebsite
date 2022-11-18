import "./About.css"
import aboutbanner from "../images/AboutBanner.png"
import about1 from "../images/about1.jpg"
import about2 from "../images/about2.jpg"
import about3 from "../images/about3.jpg"
function About() {
    return (
        <>
            <div className="about-container">
                <div className="heading">
                    <div className="head">
                        <h1>About</h1>
                    </div>
                    <div className="shadowOpacity"></div>
                    <img src={aboutbanner} alt="" />
                </div>

                <div className="wrapper">
                    <div className="box1 box">
                        <img src={about1} alt="" />
                    </div>
                    <div className="box2 box">
                        <h2>Who we are?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ab porro quae omnis eos labore, quaerat quas assumenda in. Minus.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et animi earum expedita ut harum consequatur, iure similique architecto atque quis delectus numquam tenetur repudiandae sint.</p>
                    </div>
                </div>

                <div className="our-facilities">
                    <div className="title">
                        <h1>Our Facilities</h1>
                    </div>

                    <div className="facilities-area">
                        <div className="box3 facilities-box">
                            <img src={about2} alt="" />
                        </div>
                        <div className="box4 facilities-box">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ab porro quae omnis eos labore, quaerat quas assumenda in. Minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, molestias ipsum maiores autem voluptatem atque?</p>

                        </div>
                        <div className="box5 facilities-box">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ab porro quae omnis eos labore, quaerat quas assumenda in. Minus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ut explicabo inventore, molestias possimus quidem?</p>
                        </div>
                        <div className="box6 facilities-box">
                            <img src={about3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;