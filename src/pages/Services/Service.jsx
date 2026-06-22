import Header from "../../components/Header/Header.jsx"
import Main from "../../components/Main/Main.jsx"
import NeedOurService from "../../components/NeedOurService/NeedOurService.jsx";
import ServiceList from "../../components/ServiceList/ServiceList.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Copyright from "../../components/Copyright/Copyright.jsx"
import background from "../../assets/Image/background/service_bc.jpg"
import { useLang } from "../../context/LangContext.jsx"

function Service() {
    const { t } = useLang()
    const hero = t('hero.service')

    const page = {
        key: "block__main-content-center",
        ...hero,
        pic: background,
    }

    return(
        <>
            <Header />
            <Main page={page} />
            <section className="gs-section">
                <NeedOurService />
            </section>
            <section className="gs-section">
                <ServiceList />
            </section>
            <section className="gs-section">
                <Footer />
            </section>
            <section>
                <Copyright />
            </section>
        </>
    );
}

export default Service;
