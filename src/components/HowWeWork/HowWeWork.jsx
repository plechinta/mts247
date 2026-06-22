import "./HowWeWork.css"
import HowWeWorkItem from "../HowWeWorkItem/HowWeWorkItem.jsx";
import img_1 from "../../assets/Image/we_work_block/1.jpg"
import img_2 from "../../assets/Image/we_work_block/2.jpg"
import img_3 from "../../assets/Image/we_work_block/3.jpg"
import img_4 from "../../assets/Image/we_work_block/4.jpg"
import { useLang } from "../../context/LangContext.jsx"

const pics = [img_1, img_2, img_3, img_4]

function HowWeWork() {
    const { t } = useLang()
    const steps = t('howWeWork.steps')

    return (
        <div className="we-work__wrapper">
            <div className="custom__container">
                <p className="we-work__title gs-text__h2">
                    {t('howWeWork.title')}<span style={{ color: "#FFBC00" }}>{t('howWeWork.titleYellow')}</span>
                </p>
                <p className="we-work__text gs-text">
                    {t('howWeWork.desc')}
                </p>

                <div className="row">
                    {steps.map((item, i) => (
                        <div key={i} className="col-12 howwework-col col-md-6 col-xxl-3">
                            <HowWeWorkItem title={item.title} description={item.description} pic={pics[i]} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HowWeWork;
