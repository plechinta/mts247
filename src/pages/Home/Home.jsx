import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import Copyright from "../../components/Copyright/Copyright.jsx"
import NeedOurService from "../../components/NeedOurService/NeedOurService.jsx"
import Main from "../../components/Main/Main.jsx"
import HowWeWork from "../../components/HowWeWork/HowWeWork.jsx"
import AboutUs from "../../components/AboutUs/AboutUs.jsx"
import OurService from "../../components/OurService/OurService.jsx"
import Reviews from "../../components/Reviews/Reviews.jsx"
import Form from "../../components/Form/Form.jsx"
import background from "../../assets/Image/background/main_bc.jpg"
import { useLang } from "../../context/LangContext.jsx"

function Home() {
    const { t } = useLang()
    const hero = t('hero.home')

    const page = {
        key: "",
        ...hero,
        pic: background,
    }

    return (
        <>
            <section>
                <Header />
            </section>

            <section className="gs-section">
                <Main page={page} />
            </section>

            <section>
                <NeedOurService />
            </section>

            <section className="gs-section">
                <HowWeWork />
            </section>

            <section>
                <AboutUs />
            </section>

            <section className="gs-section">
                <OurService />
            </section>

            <section className="gs-section">
                <Reviews />
            </section>

            <section className="gs-section">
                <NeedOurService />
            </section>

            <section className="gs-section">
                <Form />
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
export default Home;
