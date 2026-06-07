import "./HowWeWork.css"
import HowWeWorkItem from "../HowWeWorkItem/HowWeWorkItem.jsx";
import img_1 from "../../assets/Image/we_work_block/1.jpg"
import img_2 from "../../assets/Image/we_work_block/2.jpg"
import img_3 from "../../assets/Image/we_work_block/3.jpg"
import img_4 from "../../assets/Image/we_work_block/4.jpg"

function HowWeWork() {
    
    const items = [{title: '1ST STEP', 
                description: 'Call us or send a message on WhatsApp with your tire size and location. We confirm the service and price right away.',
                pic: img_1},
                {title: '2ND STEP', 
                description: 'Our mobile workshop drives to your home, office, or roadside location. No need to visit a garage — we bring everything with us.',
                pic: img_2},
                {title: '3RD STEP', 
                description: 'We install or repair your tires on the spot, do balancing, and check the pressure. Quick, clean, and fully equipped.',
                pic: img_3},
                {title: '4TH STEP', 
                description: 'You are ready to drive safely again in less than an hour. Fast, convenient, and hassle-free.',
                pic: img_4},]
    return (
            <div className="we-work__wrapper">
                <div className="custom__container">
                    <p className="we-work__title gs-text__h2">
                        How we <span style={{ color: "#FFBC00" }}>work</span>
                    </p>
                    <p className="we-work__text gs-text">
                        Our process is simple and convenient. Here’s
                        how we get you back <br /> on the road — step by step.
                    </p>

                    <div className="row">
                        {items.map(item => (    
                            <div key={item.title} className="col-12 howwework-col col-md-6 col-xxl-3">
                                <HowWeWorkItem title={item.title} description={item.description} pic={item.pic}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default HowWeWork;