import Header from "../../components/Header/Header.jsx"
import Main from "../../components/Main/Main.jsx"
import WhoAreWe from "../../components/WhoAreWe/WhoAreWe.jsx"
import HowWeWork from "../../components/HowWeWork/HowWeWork.jsx"
import Reviews from "../../components/Reviews/Reviews.jsx"
import PortfolioList from "../../components/PortfolioList/PortfolioList.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import NeedOurService from "../../components/NeedOurService/NeedOurService.jsx"
import Copyright from "../../components/Copyright/Copyright.jsx"
import background from "../../assets/Image/background/about_bc.jpg"

function AboutUs({}) {
    const page = {
                key: "block__main-content-center",
                status: "HOME / ABOUT US",
                titleWhite:"MOBILE TIRE SERVICE",
                titleYellow:" YOU CAN TRUST",
                desc:"Professional team, modern equipment, and 24/7 assistance — always ready to keep you moving.",
                pic: background,
                }
    return( 
        <>
            <section>
                <Header />
            </section>

            <section>
                <Main page={page}/>
            </section>

            <section>
                <NeedOurService />
            </section>

            <section className="gs-section">
                <WhoAreWe />
            </section>

            <section className="gs-section">
                <HowWeWork />
            </section> 
            
            <section className="gs-section">
                <Reviews />
            </section>

            <section className="gs-section">
                <PortfolioList />
            </section>

            <section className="gs-section">
                <Footer />
            </section>

            <section >
                <Copyright/>
            </section>
        </>

    );
}
export default AboutUs;