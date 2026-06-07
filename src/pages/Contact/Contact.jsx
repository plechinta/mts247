import Header from "../../components/Header/Header.jsx"
import Main from "../../components/Main/Main.jsx"
import Form from "../../components/Form/Form.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import ContactInfoList from "../../components/ContactInfoList/ContactInfoList.jsx"
import Copyright from "../../components/Copyright/Copyright.jsx"
import background from "../../assets/Image/background/contact_bc.jpg"

function Contact({ }) {
    const page = {
                key: "block__main-content-center",
                status: "HOME / CONTACT",
                titleWhite:"all across Belgium — ",
                titleYellow:" always ready to help",
                desc:"From Antwerp and Brussels to Ghent, Leuven, Liège and beyond — our mobile tire team is available 24/7 anywhere you need us.",
                pic: background,
                }
    return (
        <>
        <section>
            <Header />
        </section>

        <section>
            <Main page={page}/>
        </section>

        <section className="gs-section">
            <ContactInfoList />
        </section>

        <section className="gs-section">
            <Form />
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

export default Contact;