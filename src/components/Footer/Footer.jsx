import { useEffect } from 'react';
import "./Footer.css"
import logo_footer from "../../assets/Icons/logo_footer.svg"
import whatsapp_footer from "../../assets/Icons/whatsapp_footer.svg"
import instagram_footer from "../../assets/Icons/instagram_footer.svg"
import telegram_footer from "../../assets/Icons/telegram_footer.svg"
import tiktok_footer from "../../assets/Icons/tiktok_footer.svg"
import arrow from "../../assets/Icons/arrow.svg"
import loc_contact from "../../assets/Icons/loc_contact.svg"
import let_contact from "../../assets/Icons/letter_contact.svg"
import pho_contact from "../../assets/Icons/phone_contact.svg"
import { useLang } from "../../context/LangContext.jsx"

function Footer() {
    const { t } = useLang()

    useEffect(() => {
        const btn = document.getElementById("scrollToTopBtn");

        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        if (btn) {
            btn.addEventListener("click", scrollToTop);
        }

        return () => {
            if (btn) {
                btn.removeEventListener("click", scrollToTop);
            }
        };
    }, []);

    const footerNav = [
        {
            title: t('footer.siteMap'),
            links: [
                { name: t('footer.links.home'), path: '/' },
                { name: t('footer.links.service'), path: '/service' },
                { name: t('footer.links.aboutUs'), path: '/aboutus' },
                { name: t('footer.links.contactUs'), path: '/contact' },
            ]
        },
        {
            title: t('footer.services'),
            links: [
                { name: t('footer.serviceLinks.installation'), path: '/service' },
                { name: t('footer.serviceLinks.buyTires'), path: '/service' },
                { name: t('footer.serviceLinks.flatBattery'), path: '/service' },
                { name: t('footer.serviceLinks.diagnostics'), path: '/service' },
                { name: t('footer.serviceLinks.repair'), path: '/service' },
            ]
        },
    ]

    const contacts = [
        { pic: loc_contact, title: t('footer.address'), desc: 'Belgium' },
        { pic: let_contact, title: t('footer.email'), desc: 'loremipsum@gmai.com' },
        { pic: pho_contact, title: t('footer.phone'), desc: '+31657200120' },
    ]

    return (
        <div className="footer_container">
            <footer className="footer">
                <div className="custom__container">
                    <div className="row">
                        <div className="footer__wrapper flex-column flex-lg-row">
                            <div className="col-12 col-sm order-1">
                                <div className="footer-block__lft">
                                    <img src={logo_footer} alt="Logo" />
                                    <div className="footer-soc__block">
                                        <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer"><img src={whatsapp_footer} alt="WhatsApp" /></a>
                                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instagram_footer} alt="Instagram" /></a>
                                        <a href="https://web.telegram.org/" target="_blank" rel="noreferrer"><img src={telegram_footer} alt="Telegram" /></a>
                                        <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer"><img src={tiktok_footer} alt="TikTok" /></a>
                                    </div>
                                    <button className="gs-btn__bs" id="scrollToTopBtn" type="button">
                                        <img src={arrow} className="footer-icon" alt="" />
                                        {t('footer.backToTop')}
                                    </button>
                                </div>
                            </div>

                            <div className="col-12 col-sm order-3 order-md-2">
                                <div className="footer-services flex-column flex-xl-row">
                                    {footerNav.map((category, index) => (
                                        <div key={index}>
                                            <p className="footer-ff1">{category.title}</p>
                                            <div className="footer-services__table">
                                                {category.links.map((link, linksIndex) => (
                                                    <a href={link.path} className="footer-ff2" key={linksIndex}>
                                                        {link.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-12 col-sm order-2 order-md-3">
                                <div className="footer-contact__block">
                                    <p className="footer-ff1">{t('footer.contact')}</p>
                                    {contacts.map((item, index) => (
                                        <div className="footer-contact__icon" key={index}>
                                            <img src={item.pic} className="footer-contact__img" alt={item.title} />
                                            <div>
                                                <p className="footer-ff1__contact">{item.title}</p>
                                                <p className="footer-ff2__contact">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
