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
import ServiceList from "../../components/ServiceList/ServiceList.jsx"
import BuyTires from "../../components/BuyTires/BuyTires.jsx"
import WhoAreWe from "../../components/WhoAreWe/WhoAreWe.jsx"
import PortfolioList from "../../components/PortfolioList/PortfolioList.jsx"
import BgMenu from "../../components/BgMenu/BgMenu.jsx"
import background from "../../assets/Image/background/main_bc.jpg"


function Home() {
const page = {
                key: "",
                status: "",
                titleWhite:"TIRES CHANGED RIGHT ",
                titleYellow:"WHERE YOU ARE",
                desc:"Serving all of Belgium. Fast response, professional equipment, and friendly service.",
                pic: background, 
                }

    return (
        <>
            <section>
                <Header title="Hello" />
            </section>

            <section className="gs-section">
                <Main  page={page}/>
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

            <section >
                <Copyright />
            </section>

            {/* <section><BgMenu /></section> */}
        </>
    );
}
export default Home;
