import "./AboutUs.css"
import watch from "../../assets/Icons/watch.svg"
import shield from "../../assets/Icons/shield.svg"
import geo from "../../assets/Icons/geo.svg"
import car from "../../assets/Image/car.png"



function AboutUs({ title }) {
    return (

    <div className="about-wrapper">
        
        <div className="custom__container">

            <div className="row">

                <div className="">
                    <div className="col-12 col-xl-7">
                        <div className="about-container__txt">
                            <p className="about__title gs-text__h2">
                                about <span style={{color: "#FFBC00"}}>us</span>
                            </p>
                            <p className="about__desc">At Mobile Tire Service 24/7, we understand how stressful 
                                a flat or damaged tire can be — especially when you’re on the move. 
                                That’s why our certified mobile technicians are ready around the clock to assist you anywhere in Belgium.
                                <br /><br /> Whether you’re stuck on the highway, at home, or in your company parking lot — 
                                we come to you with all the professional tools needed to fix or replace your tire on-site.
                                <br /><br />No need to call a tow truck or struggle with a spare tire — 
                                we handle everything so you can get back on the road safely and quickly.
                            </p>
                        </div>
    
                        <div className="about-wrapper__icon">
                            <div className="about-block__icon">
                            <img src={watch} alt="" />
                                fast
                            </div>
                            <div className="about-block__icon">
                                <img src={shield} alt="" />
                                Reliable
                            </div>
                            <div className="about-block__icon">
                                <img src={geo} alt="" />
                                ON LOCATION
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
            <img className="about-background__img" src={car} alt="" />
    </div>
    
    );
}

export default AboutUs;