import "./WhoAreWe.css"
import tire_2 from "../../assets/Icons/tire2.svg"
import car from "../../assets/Icons/car.svg"
import weare from "../../assets/Image/weare.png"
import { useLang } from "../../context/LangContext.jsx"

function WhoAreWe() {
    const { t } = useLang()
    const stats = t('whoAreWe.stats')

    return (
        <div className="whoarewe__wrapper">
            <div className="custom__container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="whoarewe__txt-block">
                            <div className="whoarewe__txt">
                                <span className="gs-text__h2">{t('whoAreWe.title')}<span style={{color:"#ffbc00"}}>{t('whoAreWe.titleYellow')}</span></span>
                                <span className="whoarewe__desc">{t('whoAreWe.desc')}</span>
                            </div>
                            <hr className="whoarewe__hr d-none d-md-flex" />
                            <div className="whoarewe__txt">
                                <div className="whoweare__icon-block">
                                    <img className="whoarewe-icon" src={tire_2} alt="" />
                                    <span className="whoarewe__title">{t('whoAreWe.visionTitle')}</span>
                                </div>
                                <span className="whoarewe__desc">{t('whoAreWe.visionDesc')}</span>
                            </div>

                            <hr className="whoarewe__hr d-none d-md-flex" />
                            <div className="whoarewe__txt">
                                <div className="whoweare__icon-block">
                                    <img className="whoarewe-icon" src={car} alt="" />
                                    <span className="whoarewe__title">{t('whoAreWe.missionTitle')}</span>
                                </div>
                                <span className="whoarewe__desc">{t('whoAreWe.missionDesc')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 d-none d-lg-flex">
                        <img className="whoweare__img" src={weare} alt="" />
                    </div>
                </div>

                <div className="whoarewe__spacing">
                    <div className="row">
                        {stats.map((stat, i) => (
                            <div key={i} className={`col-6 col-md-3${i >= 2 ? ' mt-4 mt-md-0' : ''}`}>
                                <div className="whoweare__charts">
                                    <span className="whoweare__charts-title">{stat.value}</span>
                                    <span className="whoweare__charts-desc">{stat.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhoAreWe;
