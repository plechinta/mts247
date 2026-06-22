import "./Form.css"
import location from "../../assets/Icons/geo-bt.svg"
import tire from "../../assets/Image/tires.png"
import { useLang } from "../../context/LangContext.jsx"

function Form() {
    const { t } = useLang()

    const handleFindMe = () => {
        if (!navigator.geolocation) {
            alert(t('form.geoNotSupported'));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                const mapUrl = `https://maps.google.com/?q=${lat},${lng}`;

                const message = encodeURIComponent(
                    t('form.waMessage') + mapUrl
                );

                window.open(
                    `https://wa.me/+32479080218?text=${message}`,
                    "_blank"
                );
            },
            (error) => {
                console.error(error);
                alert(t('form.geoError'));
            }
        );
    };

    return (
        <div className="form">
            <div className="custom__container">
                <div className="form-wrapper d-flex flex-column flex-xxl-row">
                    <div className="form-col-left">
                        <div className="form-left__block">
                            <button className="btn__form-sm gs-btn__sm">{t('form.badge')}</button>
                            <span className="form-title_text gs-text__h2 d-block">
                                {t('form.title')}<span style={{color: "#FFBC00"}}>{t('form.titleYellow')}</span>
                            </span>
                            <p className="gs-text">{t('form.desc')}</p>
                            <button className="btn__form-fm gs-btn gs-btn__sy" onClick={handleFindMe}>
                                <img src={location} alt="" />
                                <span>{t('buttons.findMe')}</span>
                            </button>
                            <img className="form-img d-none d-xxl-flex" src={tire} alt="" />
                        </div>
                    </div>

                    <div className="form-col-right">
                        <form className="contact-form" action="#" method="post">
                            <fieldset className="form-contact__block">
                                <div className="form-fields__list">
                                    <div className="form-field">
                                        <label htmlFor="email">{t('form.emailLabel')}</label>
                                        <input type="text" name="email" placeholder={t('form.emailPlaceholder')} id="email" />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="telephone">{t('form.phoneLabel')}</label>
                                        <input type="tel" name="telephone" placeholder={t('form.phonePlaceholder')} id="telephone" />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="fullName">{t('form.nameLabel')}</label>
                                        <input type="text" name="fullName" placeholder={t('form.namePlaceholder')} id="fullName" />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="location">{t('form.locationLabel')}</label>
                                        <input type="text" name="location" placeholder={t('form.locationPlaceholder')} id="location" />
                                    </div>
                                </div>

                                <div className="form-textarea">
                                    <label htmlFor="message">{t('form.messageLabel')}</label>
                                    <textarea name="message" placeholder={t('form.messagePlaceholder')} id="message"></textarea>
                                </div>

                                <button className="btn-form__send gs-btn__y">{t('form.sendBtn')}</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;
