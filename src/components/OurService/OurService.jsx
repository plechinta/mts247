import "./OurService.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import OurServiceItem from "../OurServiceItem/OurServiceItem.jsx";
import photo_1 from "../../assets/Image/Services/1.jpg"
import BuyTires from "../BuyTires/BuyTires.jsx"
import { useRef, useState } from 'react';

function OurService({ title }) {
    const splideRef = useRef(null);
    const [activateIndex, setActivateIndex] = useState(0);
    const firstServices = [];
    const serviceItems = [
        { title: 'Tire Repair Services', description: 'We fix punctures and slow leaks right on the spot so you can get back on the road.' },
        { title: 'Seasonal wheel change', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { title: 'Diagnostics for cars', description: `We check your car's electronic systems for faults using computer professional equipment.` },
        { title: 'Rim Repair Service', description: 'We repair bent and damaged discs, restoring their shape and safety.' },
        { title: 'Help with a flat battery', description: `If your car won't start, we'll come and jump-start it or replace the battery with a new one.` },
        { title: 'Buy Tires with Us', description: `Order new or used tires directly through us. We'll deliver and install them at your location fast and hassle-free.` },
        { title: 'Buy Tires with Us', description: `Order new or used tires directly through us. We'll deliver and install them at your location fast and hassle-free.` },
        { title: 'Buy Tires with Us', description: `Order new or used tires directly through us. We'll deliver and install them at your location fast and hassle-free.` },
        { title: 'Buy Tires with Us', description: `Order new or used tires directly through us. We'll deliver and install them at your location fast and hassle-free.` },
        { title: 'Buy Tires with Us', description: `Order new or used tires directly through us. We'll deliver and install them at your location fast and hassle-free.` },
        { title: 'Buy Tires with Us', description: `Order new or used tires directly through us. We'll deliver and install them at your location fast and hassle-free.` },
        { title: 'Buy Tires with Us', description: `Order new or used tires directly through us. We'll deliver and install them at your location fast and hassle-free.` },
        { title: 'Buy Tires with Us', description: `Order new or used tires directly through us. We'll deliver and install them at your location fast and hassle-free.` },
    ]

    for (let i = 0; i < serviceItems.length; i += 6) {
        firstServices.push(serviceItems.slice(i, i + 6))
    }

    return (
        <div className="services-wrapper">
            <div className="custom__container">
                <p className="our-service__title gs-text__h2">
                    Our <span style={{ color: "#FFBC00" }}>Services</span>
                </p>
                <p className="our-service__text gs-text mb-4">
                    We provide fast and reliable mobile tire services all over Belgium.
                    Save time and get back on the road without visiting a garage.
                </p>
                <div className="row">
                    <div className="col-4 d-none d-xxl-flex align-items-center">
                        <div className="our-service-b1">
                            <img className="our-service__img" src={photo_1} alt="" />
                            <div className="our-srvice__txt">
                                <p className="our-service__title gs-text__h4">
                                    Tire Installation Service
                                </p>
                                <p className="our-service__desc gs-text">
                                    We will come to you and replace your tires on the spot —
                                    quickly and conveniently. No visits to the service center!
                                </p>
                            </div>
                            <button className="our-service__bt gs-btn__sr gs-text__h5">Contact Us</button>
                        </div>
                    </div>

                    <div className="col-12 d-xxl-none">
                        <BuyTires />
                    </div>

                    <div className="col-12 col-xxl-8">
                        <Splide
                            ref={splideRef}
                            options={{
                                type: 'loop',
                                padding: 0,
                                gap: '24px',
                                perMove: 1,
                                pagination: false,
                                arrows: false,
                                focus: 0,
                                trimSpace: true,
                                width: '100%',
                            }}
                            onMoved={(splide) => setActivateIndex(splide.index)}
                        >
                            {firstServices.map((items, slideIndex) => (
                                <SplideSlide key={slideIndex}>
                                    <div className="our-service-slide">
                                        {items.map((item, itemIndex) => (
                                            <OurServiceItem
                                                key={itemIndex}
                                                title={item.title}
                                                description={item.description}
                                            />
                                        ))}
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>

                    <div className="row">
                        <div className="col-12 mt-4">
                            <div className="service__pagination-block">
                                <a
                                    className="service__pagination-lg"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        splideRef.current.go('<');
                                    }}
                                >
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.5783 2.98418C20.9322 3.3381 20.9322 3.9119 20.5783 4.26582L10.3441 14.5L20.5783 24.7342C20.9322 25.0881 20.9322 25.6619 20.5783 26.0158C20.2244 26.3697 19.6506 26.3697 19.2967 26.0158L8.42168 15.1408C8.06777 14.7869 8.06777 14.2131 8.42168 13.8592L19.2967 2.98418C19.6506 2.63027 20.2244 2.63027 20.5783 2.98418Z" fill="black" />
                                    </svg>
                                    <span className="d-none d-xxl-block">Previous</span>
                                </a>

                                {firstServices.map((_, index) => (
                                    <a
                                        key={index}
                                        className={"service__pagination-sm" + (activateIndex === index ? " is-active" : "")}
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            splideRef.current.go(index);
                                        }}
                                    >
                                        {index + 1}
                                    </a>
                                ))}

                                <a
                                    className="service__pagination-lg"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        splideRef.current.go('>');
                                    }}
                                >
                                    <span className="d-none d-xxl-block">Next</span>
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.42168 2.98418C8.7756 2.63027 9.3494 2.63027 9.70332 2.98418L20.5783 13.8592C20.9322 14.2131 20.9322 14.7869 20.5783 15.1408L9.70332 26.0158C9.3494 26.3697 8.7756 26.3697 8.42168 26.0158C8.06777 25.6619 8.06777 25.0881 8.42168 24.7342L18.6559 14.5L8.42168 4.26582C8.06777 3.9119 8.06777 3.3381 8.42168 2.98418Z" fill="black" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurService;
