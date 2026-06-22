import "./NeedOurService.css"
import { useLang } from "../../context/LangContext.jsx"

function NeedOurService() {
    const { t } = useLang()

    return (
        <div className="block-nd">
            <div className="container">
                <div className="row d-flex flex-column g-4 flex-xxl-row">
                    <div className="col-12 col-xxl-5">
                        <div className="block-nd-title__wrap">
                            <span className="wrapper__txt gs-text__h3">{t('needService.title1')} </span>
                            <span className="wrapper__txt gs-text__h3">{t('needService.title2')}</span>
                        </div>
                    </div>
                    <div className="col-12 d-flex d-xxl-none">
                        <hr className="need__service-line" />
                    </div>
                    <div className="col-12 col-xxl-5">
                        <div className="block__number">
                            <div className="block__icon">
                                <svg width="56" height="56" rx="12" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="56" height="56" rx="12" fill="black" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.8272 16.7666C19.9403 15.6534 21.7772 15.7678 22.7437 17.0105L25.4343 20.4697C25.9281 21.1046 26.1025 21.9311 25.9075 22.7113L25.0866 25.9949C24.9999 26.3416 25.1015 26.7083 25.3542 26.961L29.039 30.6459C29.2917 30.8985 29.6584 31.0001 30.0051 30.9134L33.2887 30.0925C34.0689 29.8975 34.8954 30.072 35.5303 30.5657L38.9895 33.2563C40.2322 34.2228 40.3466 36.0597 39.2334 37.1728L37.6825 38.7237C36.5729 39.8333 34.9133 40.3205 33.3666 39.7767C29.5263 38.4266 25.9216 36.2161 22.8527 33.1473C19.7839 30.0784 17.5734 26.4737 16.2233 22.6334C15.6795 21.0867 16.1667 19.4271 17.2763 18.3175L18.8272 16.7666Z" fill="#FFBC00" />
                                </svg>
                            </div>
                            <div className="block__ni">
                                <div className="num_text">{t('needService.phoneLabel')}</div>
                                <div className="gs-text__h3">+32474036272</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xxl-2 d-flex justify-content-center">
                        <a href="tel:+32479080218"><button className="gs-btn__b gs-btn">{t('needService.callUs')}</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NeedOurService;
