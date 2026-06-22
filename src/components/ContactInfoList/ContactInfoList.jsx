import "./ContactInfoList.css"
import { useLang } from "../../context/LangContext.jsx"

function ContactInfoList() {
    const { t } = useLang()

    return (
        <div className="contactinfo__wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-4 mb-4">
                        <div className="contactinfoitem__wrapper">
                            <div className="contactinfo__icon">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.53395 0.958267C4.92541 -0.433197 7.22155 -0.290245 8.42968 1.26306L11.7929 5.58717C12.4101 6.3807 12.6282 7.41391 12.3843 8.38918L11.3582 12.4937C11.2499 12.927 11.3769 13.3854 11.6927 13.7012L16.2988 18.3073C16.6146 18.6232 17.073 18.7501 17.5063 18.6418L21.6108 17.6157C22.5861 17.3718 23.6193 17.5899 24.4128 18.2071L28.7369 21.5703C30.2902 22.7784 30.4332 25.0746 29.0417 26.4661L27.1031 28.4047C25.7162 29.7916 23.6416 30.4007 21.7083 29.7209C16.9079 28.0332 12.402 25.2701 8.56592 21.4341C4.72987 17.598 1.96678 13.0921 0.279071 8.29172C-0.400654 6.35836 0.208369 4.28385 1.59534 2.89687L3.53395 0.958267Z" fill="#FFBC00" />
                                </svg>
                            </div>
                            <div className="contactinfo__text">
                                <p className="contactinfo__text-sm">{t('contactInfo.phone')}</p>
                                <p className="contactinfo__text-md">+32 474 03 62 72</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 mb-4">
                        <div className="contactinfoitem__wrapper">
                            <div className="contactinfo__icon">
                                <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.0929726 2.91645C0.471994 1.24657 1.96542 0 3.75 0H26.25C28.0346 0 29.528 1.24657 29.907 2.91645L15 12.0263L0.0929726 2.91645ZM0 5.05703V18.3761L10.881 11.7065L0 5.05703ZM12.6776 12.8045L0.359758 20.3548C0.961133 21.623 2.25315 22.5 3.75 22.5H26.25C27.7469 22.5 29.0389 21.623 29.6402 20.3548L17.3224 12.8045L15 14.2237L12.6776 12.8045ZM19.119 11.7065L30 18.3761V5.05703L19.119 11.7065Z" fill="#FFBC00" />
                                </svg>
                            </div>
                            <div className="contactinfo__text">
                                <p className="contactinfo__text-sm">{t('contactInfo.email')}</p>
                                <p className="contactinfo__text-md">loremipsum@gmai.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 mb-4">
                        <div className="contactinfoitem__wrapper">
                            <div className="contactinfo__icon">
                                <svg width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.25 30C11.25 30 22.5 19.3382 22.5 11.25C22.5 5.0368 17.4632 0 11.25 0C5.0368 0 0 5.0368 0 11.25C0 19.3382 11.25 30 11.25 30ZM11.25 16.875C8.1434 16.875 5.625 14.3566 5.625 11.25C5.625 8.1434 8.1434 5.625 11.25 5.625C14.3566 5.625 16.875 8.1434 16.875 11.25C16.875 14.3566 14.3566 16.875 11.25 16.875Z" fill="#FFBC00" />
                                </svg>
                            </div>
                            <div className="contactinfo__text">
                                <p className="contactinfo__text-sm">{t('contactInfo.location')}</p>
                                <p className="contactinfo__text-md">Belgium</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfoList;
