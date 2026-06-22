import "./AboutUs.css"
import watch from "../../assets/Icons/watch.svg"
import shield from "../../assets/Icons/shield.svg"
import geo from "../../assets/Icons/geo.svg"
import car from "../../assets/Image/car.png"
import { useLang } from "../../context/LangContext.jsx"

function AboutUs() {
    const { t } = useLang()

    return (
    <div className="about-wrapper">
        <div className="custom__container">
            <div className="row">
                <div className="">
                    <div className="col-12 col-xl-7">
                        <div className="about-container__txt">
                            <p className="about__title gs-text__h2">
                                {t('aboutUs.title')}<span style={{color: "#FFBC00"}}>{t('aboutUs.titleYellow')}</span>
                            </p>
                            <p className="about__desc">
                                {t('aboutUs.desc').split('\n\n').map((para, i) => (
                                    <span key={i}>{para}{i < 2 && <><br /><br /></>}</span>
                                ))}
                            </p>
                        </div>

                        <div className="about-wrapper__icon">
                            <div className="about-block__icon">
                                <img src={watch} alt="" />
                                {t('aboutUs.fast')}
                            </div>
                            <div className="about-block__icon">
                                <img src={shield} alt="" />
                                {t('aboutUs.reliable')}
                            </div>
                            <div className="about-block__icon">
                                <img src={geo} alt="" />
                                {t('aboutUs.onLocation')}
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
