import "./BuyTires.css"
import tire_photo from "../../assets/Image/buy_tires.png"

function BuyTires({title}) {
    return (
        
                <div className="mb-4">
                    <div className="tires-box">
                        <div className="tires-box__text">
                            <p className="tires-box__title">Buy tires from us!</p>
                            <p className="tires-box__desc">Lorem ipsum lorem ipsum</p>
                        </div>
                        <img src={tire_photo} className="tire_box__img" alt="" />
                    </div>
                </div>

    )
}
export default BuyTires;