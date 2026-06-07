import "./Header.css"
import logo from "../../assets/Image/logo.svg"
import insta from "../../assets/Icons/inst.svg"
import telegram from "../../assets/Icons/telegram.svg"
import whatsapp from "../../assets/Icons/whatsapp.svg"
import location from "../../assets/Icons/geo-bt.svg"
import { useState, useEffect } from 'react'
import BgMenu from "../BgMenu/BgMenu.jsx"
import SelectLang from "../SelectLang/SelectLang.jsx"

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleFindMe = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                const mapUrl = `https://maps.google.com/?q=${lat},${lng}`;

                const message = encodeURIComponent(
                    `Hello, I need assistance.\n\nMy location:\n${mapUrl}`
                );

                window.open(
                    `https://wa.me/+32479080218?text=${message}`,
                    "_blank"
                );
            },
            (error) => {
                console.error(error);
                alert("Unable to get your location");
            }
        );
    };

    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center">

                    {/* ЛОГОТИП */}
                    <div className="col-6 col-xxl-2">
                        <img src={logo} alt="Logo" className="header__logo" />
                    </div>

                    {/* ЦЕНТР: МЕНЮ + СОЦСЕТИ */}
                    <div className="col-6 col-xxl-7 d-flex justify-content-end justify-content-xxl-center align-items-center">
                        {/* Бургер для мобилок */}
                        <button className="nav-btn d-xxl-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {/* Твой SVG бургера */}
                            <svg width="40" height="40" viewBox="0 0 44 44" fill="none"><rect width="44" height="44" rx="9" fill="#FFBC00" /><path d="M11 32H33V28.6667H11V32ZM11 23.6667H33V20.3333H11V23.6667ZM11 12V15.3333H33V12H11Z" fill="black" /></svg>
                        </button>

                        {/* Навигация */}
                        <nav className="d-none d-xxl-flex align-items-center">
                            <ul className="header__nav-list">
                                <li><a className="header__nav-link" href="/">home</a></li>
                                <li><a className="header__nav-link" href="/service">services</a></li>
                                <li><a className="header__nav-link" href="/aboutus">about us</a></li>
                                <li><a className="header__nav-link" href="/contact">contact</a></li>
                            </ul>
                            <div className="header__soc">
                                <a href="https://www.instagram.com/" target="_blank"><img src={insta} alt="Inst" /></a>
                                <a href="https://web.whatsapp.com/" target="_blank"><img src={whatsapp} alt="Wa" /></a>
                                <a href="https://web.telegram.org/" target="_blank"><img src={telegram} alt="Tg" /></a>
                            </div>
                        </nav>
                    </div>

                    {/* ПРАВАЯ ЧАСТЬ */}
                    <div className="col-3 d-none d-xxl-flex justify-content-end align-items-center">
                        <SelectLang />
                        <button className="gs-btn gs-btn__sy ms-3"  onClick={handleFindMe}>
                            <img src={location} alt="" />Locate Me
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && <BgMenu func={setIsMenuOpen} />}
        </header>
    );
}
export default Header;