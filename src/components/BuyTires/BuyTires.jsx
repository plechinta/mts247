import "./BuyTires.css"
import tire_photo from "../../assets/Image/buy_tires.png"
import { useLang } from "../../context/LangContext.jsx"

function BuyTires() {
    const { t } = useLang()

    return (
        <div className="mb-4">
            <div className="tires-box">
                <span className="gs-text__h5" style={{color: "#000"}}>{t('buyTires.title')}</span>
                <br />
                <span className="gs-text" style={{color: "#000"}}>{t('buyTires.desc')}</span>
                <img src={tire_photo} className="tire_box__img" alt="" />
            </div>
        </div>
    )
}
export default BuyTires;
