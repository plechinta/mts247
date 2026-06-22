import Header from "../../components/Header/Header.jsx"
import Main from "../../components/Main/Main.jsx"
import Form from "../../components/Form/Form.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import ContactInfoList from "../../components/ContactInfoList/ContactInfoList.jsx"
import Copyright from "../../components/Copyright/Copyright.jsx"
import background from "../../assets/Image/background/contact_bc.jpg"
import { useLang } from "../../context/LangContext.jsx"

function Contact() {
    const { t } = useLang()
    const hero = t('hero.contact')

    const page = {
        key: "block__main-content-center",
        ...hero,
        pic: background,
    }

    return (
        <>
            <section>
                <Header />
            </section>

            <section>
                <Main page={page} />
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

            <section>
                <Copyright />
            </section>
        </>
    );
}

export default Contact;
