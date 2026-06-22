import "./Main.css"
import { useLang } from "../../context/LangContext.jsx"

function Main(props) {
    const { t } = useLang()

    return (
    <div className="main__wrapper" style={{backgroundImage: `url(${props.page.pic})`}}>
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <div className={props.page.key}>
                        <p className="d-none d-sm-flex">{props.page.status}</p>
                        <h1 className="main__title-text gs-text__h1">{props.page.titleWhite}<span style={{color: "#FFBC00"}}>{props.page.titleYellow}</span></h1>
                        <p className="main__desc-text gs-text">{props.page.desc}</p>
                        <div className="main__btn-container  d-flex align-items-center gap-3 flex-wrap ">
                            <a href="tel:+32479080218"><button className="main__btn gs-btn gs-btn__by me-xxl-5">{t('buttons.callUs')}</button></a>
                            <a href="/service" className="main__link-block gs-lnk">
                                <span>{t('buttons.goToServices')}</span>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 0V2H11.59L0 13.59L1.41 15L13 3.41V10H15V0H5Z" fill="#FFBC00" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Main;
