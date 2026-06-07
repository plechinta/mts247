import "./ServiceItemList.css"


function ServiceItemList(props) {
    return (

        <div className="serviceItem">
            <div className="d-flex justify-content-between flex-column flex-column-reverse flex-md-row">
    
                <span className="serviceItem__title gs-text__h2 order-1" style={{ color: "#FFBC00" }}>{props.title}</span>
    
                <div className="serviceItem__desc order-3 d-none d-xl-flex">
                    <span className="gs-text serviceitem-text mb-4">
                        {props.desc}
                    </span>
    
                    <div className="d-flex flex-nowrap">
                        <button className="btn-service-item-list main__btn gs-btn gs-btn__by">Call us</button>
                        <a href="#" className="main__link-block gs-lnk">
                            <span>Go to services</span>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 0V2H11.59L0 13.59L1.41 15L13 3.41V10H15V0H5Z" fill="#FFBC00" />
                            </svg>
                        </a>
                    </div>
                </div>
    
                {/* <span className="serviceItem__title gs-text__h2 d-none d-md-inline-block d-xl-none" style={{ color: "#FFBC00" }}>{props.title}</span> */}
                <img src={props.pic} className="serviceItem__img order-1 order-xl-3 d-flex justify-content-between align-items-center" alt="" />
    
    
            </div>

            <div className="serviceItem__desc d-xl-none">
                <span className="gs-text serviceitem-text mb-4">
                    {props.desc}
                </span>

                <div className="d-flex flex-nowrap">
                    <a href="tel:+32479080218"><button className="btn-service-item-list main__btn gs-btn gs-btn__by">Call us</button></a>
                    <a href="#" className="main__link-block gs-lnk">
                        <span>Go to services</span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 0V2H11.59L0 13.59L1.41 15L13 3.41V10H15V0H5Z" fill="#FFBC00" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default ServiceItemList;