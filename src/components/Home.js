import "./Home.css"
import homebanner from "../images/HomeBanner.png"
import homeimg1 from "../images/home1.jpg"
import homeimg2 from "../images/home2.jpg"
import homeimg3 from "../images/home3.jpg"

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-heading">
                    <div className="head">
                        <h1>Lorem, ipsum dolor.</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae numquam, dolorum fuga eius vitae
                            rerum autem consequatur veniam praesentium vel Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quisquam?</p>
                    </div>
                    <div className="shadowOpacity"></div>
                    <img src={homebanner} alt="" />
                </div>

                <div className="home-wrapper">
                    <div className="box1 box">
                        <img src={homeimg1} alt="" />
                        <h3>Display</h3>
                    </div>
                    <div className="box2 box">
                        <img src={homeimg2} alt="" />
                        <h3>Power or Volume Button</h3>
                    </div>
                    <div className="box3 box">
                        <img src={homeimg3} alt="" />
                            <h3>Charging</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;