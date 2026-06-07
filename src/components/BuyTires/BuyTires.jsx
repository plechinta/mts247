import "./BuyTires.css"
import tire_photo from "../../assets/Image/buy_tires.png"

function BuyTires({title}) {
    return (
        
                <div className="mb-4">
                    <div className="tires-box">
                        <span className="gs-text__h5" style={{color: "#000"}}>Buy tires from us!</span>
                        <br />
                        <span className="gs-text" style={{color: "#000"}}>Lorem ipsum lorem ipsum</span>
                        <img src={tire_photo} className="tire_box__img" alt="" />
                    </div>
                </div>

    )
}
export default BuyTires;