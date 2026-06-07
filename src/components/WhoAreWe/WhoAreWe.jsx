import "./WhoAreWe.css"
import tire_2 from "../../assets/Icons/tire2.svg"
import car from "../../assets/Icons/car.svg"
import weare from "../../assets/Image/weare.png"


function WhoAreWe({title}) {
    return (

        <div className="whoarewe__wrapper">
            <div className="custom__container">
                <div className="row">
                    <div className="col-12 col-lg   -6">
    
                        <div className="whoarewe__txt-block">
                            <div className="whoarewe__txt">
                                <span className="gs-text__h2">Who are <span style={{color:"#ffbc00"}}>we ?</span></span>
                                <span className="whoarewe__desc">We are a Belgian mobile tire service, dedicated to 
                                    keeping drivers safe and confident on the road. 
                                    Our mission is simple: to bring professional tire replacement and 
                                    roadside assistance directly to you, wherever you are.
                                </span>
                            </div>
                                <hr className="whoarewe__hr d-none d-md-flex" />
                                <div className="whoarewe__txt">
                                    <div className="whoweare__icon-block">
                                        <img className="whoarewe-icon" src={tire_2} alt="" />
                                        <span className="whoarewe__title">OUR Vision</span>
                                    </div>
                                    <span className="whoarewe__desc">To become the most trusted mobile tire and roadside service in Belgium, 
                                        recognized for speed, reliability, and customer care. We strive to 
                                        ensure that every driver feels safe and supported, wherever the road takes them.
                                    </span>
                                </div>
        
                                <hr className="whoarewe__hr d-none d-md-flex" />
                                <div className="whoarewe__txt">
                                    <div className="whoweare__icon-block">
                                        <img className="whoarewe-icon" src={car} alt="" />
                                        <span className="whoarewe__title">OUR Mission</span>
                                    </div>
                                    <span className="whoarewe__desc">
                                        Our mission is to deliver fast, professional, and 24/7 tire and 
                                        roadside assistance directly on-site. We are committed to saving drivers’ 
                                        time, reducing stress, and providing transparent service that 
                                        brings peace of mind on the road.
                                    </span>
                                </div>
                        </div>
    
                    </div>
                    <div className="col-6 d-none d-lg-flex">
                        <img className="whoweare__img" src={weare} alt="" />
                    </div>
                </div>
                
                <div className="whoarewe__spacing">
                    <div className="row">
                        <div className="col-6 col-md-3">
                            <div className="whoweare__charts">
                                <span className="whoweare__charts-title">5K+</span>
                                <span className="whoweare__charts-desc">Satisfied Clients</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="whoweare__charts">
                                <span className="whoweare__charts-title">24/7</span>
                                <span className="whoweare__charts-desc">mobile Service</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mt-4 mt-md-0">
                            <div className="whoweare__charts">
                                <span className="whoweare__charts-title">1K+</span>
                                <span className="whoweare__charts-desc">Tires Replaced</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mt-4 mt-md-0">
                            <div className="whoweare__charts">
                                <span className="whoweare__charts-title">10+</span>
                                <span className="whoweare__charts-desc">Years of Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhoAreWe;