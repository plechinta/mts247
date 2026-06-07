import "./Form.css"
import location from "../../assets/Icons/geo-bt.svg"
import tire from "../../assets/Image/tires.png"

function Form({title}) {
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
    return( 

        <div className="form">
            <div className="container">
                <div className="row">
                    <div className="form-wrapper d-flex flex-column flex-xxl-row justify-content-xxl-space-between ">
                        <div className="col">
                            <div className="form-left__block">
                                <button className="btn__form-sm gs-btn__sm">Contact</button>
                                <span className="form-title_text gs-text__h2 d-block"> We’d love <span style={{color: "#FFBC00"}}>you to help</span></span>
                                <p className="gs-text">Reach out and we will ge in touch within a short time. </p>
                                <button className="btn__form-fm gs-btn gs-btn__sy" onClick={handleFindMe}>
                                    <img src={location} alt="" />
                                    <span>Find me</span>
                                </button>
                                <img className="form-img d-none d-xxl-flex" src={tire} alt="" />
                            </div>
                        </div>

                        <div className="col">
                            <form className="contact-form" action="#" method="post"> 
    
                                <fieldset className="form-contact__block">
    
                                    <div className="form-fields__list">
                                        <div className="form-field">
                                            <label htmlFor="email">E-mail:</label>
                                            <input type="text" name="email" placeholder="YourEmail@gmail.com" id="email"/>    
                                        </div>     
                                        <div className="form-field">
                                                <label htmlFor="telephone">Telephone:</label>
                                                <input type="tel" name="telephone" placeholder="+32 474 03 62 72" id="telephone" />   
                                        </div>
                                        <div className="form-field">
                                            <label htmlFor="fullName">Name and Surname:</label>
                                            <input type="text" name="fullName" placeholder="Name & Surname" id="fullName" />    
                                        </div>     
                                        <div className="form-field">
                                            <label htmlFor="location">Location:</label>
                                            <input type="text" name="location" placeholder="Location" id="location"/>
                                        </div>
                                    </div>
                                    
                                    <div className="form-textarea">
                                        <label htmlFor="message">Message:</label>
                                        <textarea name="message" placeholder="Type your message" id="message"></textarea>
                                    </div>

        
                                    {/* Вытащить из филдсет или нет */}
                                <button className="btn-form__send gs-btn__y">SEND us</button>
    
                                </fieldset>
    
    
                            </form>
                        </div>
                    </div>

                </div>
                
                
            </div>
        </div>
    )
}

export default Form;    