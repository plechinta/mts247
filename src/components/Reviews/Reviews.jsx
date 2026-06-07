import "./Reviews.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ReviewsItem from "../ReviewsItem/ReviewsItem.jsx";
import star from "../../assets/Icons/Star5.svg"
import {useRef} from 'react'

function Reviews({ title }) {
    const splideRef = useRef(null)
    return (


        <div className="reviews-container">
            <div className="custom__container">
                <p className="gs-text__h2">
                    What  <span style={{ color: "#FFBC00" }}>customer saying</span>
                </p>
                <p className="rewiew__title-desc gs-text">
                    We’re proud to share the real experiences of our customers
                    who trust us every <br /> day on the roads of Belgium.
                </p>
            </div>

            <Splide
                ref={splideRef}
                options={{
                    type: 'loop',
                    padding: 10,
                    gap: '24px',
                    perMove: 3,
                    pagination: false,
                    arrows: false,
                    focus: 'center',
                    trimSpace: false,
                    fixedWidth: '334px',
                    breakpoints: {
                        768: {
                            fixedWidth: '301px',
                            pagination: true,
                        }
                    }
                }}>
                <SplideSlide >
                    <ReviewsItem></ReviewsItem>
                </SplideSlide>
                <SplideSlide>
                    <ReviewsItem></ReviewsItem>
                </SplideSlide>
                <SplideSlide>
                    <ReviewsItem></ReviewsItem>
                </SplideSlide>
                <SplideSlide>
                    <ReviewsItem></ReviewsItem>
                </SplideSlide>
                <SplideSlide>
                    <ReviewsItem></ReviewsItem>
                </SplideSlide>
                <SplideSlide>
                    <ReviewsItem></ReviewsItem>
                </SplideSlide>
                <SplideSlide>
                    <ReviewsItem></ReviewsItem>
                </SplideSlide>
                <SplideSlide>
                    <ReviewsItem></ReviewsItem>
                </SplideSlide>
                <SplideSlide>
                    <ReviewsItem></ReviewsItem>
                </SplideSlide>
            </Splide>


            <div className="rating__container">

                    <div className="custom__container">
                        <div className="row">
                            <div className="col-10">
                                <div className="rewiev-txt">
                                    <img src={star} alt="" />
                                    <span className="review-ff1">4.5</span>
                                    <span className="review-ff2">Average <br />customer rating</span>
                                </div>
                            </div>
        
        
                            <div className="col-2">
        
                                <div className="reviews__pagination">
                                    <a className="reviews__pagination-item" href="#" onClick={(e) => {
                                        e.preventDefault();
                                        splideRef.current.go('<');
                                    }}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.3536 1.64645C11.5488 1.84171 11.5488 2.15829 11.3536 2.35355L5.70711 8L11.3536 13.6464C11.5488 13.8417 11.5488 14.1583 11.3536 14.3536C11.1583 14.5488 10.8417 14.5488 10.6464 14.3536L4.64645 8.35355C4.45118 8.15829 4.45118 7.84171 4.64645 7.64645L10.6464 1.64645C10.8417 1.45118 11.1583 1.45118 11.3536 1.64645Z" fill="black" />
                                        </svg>
                                    </a>
        
                                    <a className="reviews__pagination-item" href="#" onClick={(e) =>  {
                                        e.preventDefault();
                                        splideRef.current.go('>');
                                    }}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z" fill="black" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>


        </div >



    )
}

export default Reviews; 