import "./ReviewsItem.css"

function ReviewsItem({ reviewText, name, rating = 5, city }) {
    const starFull = (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1816 0L15.0572 8.98278H24.3632L16.8345 14.5344L19.7102 23.5172L12.1816 17.9656L4.6529 23.5172L7.52859 14.5344L-6.00815e-05 8.98278H9.30587L12.1816 0Z" fill="#FFBC00" />
        </svg>
    )
    const starHalf = (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8193 9.05859L14.875 9.23242H23.6035L16.6865 14.333L16.542 14.4395L16.5967 14.6104L19.2354 22.8574L12.3301 17.7646L12.1816 17.6553L12.0332 17.7646L5.12598 22.8574L7.7666 14.6104L7.82129 14.4395L7.67676 14.333L0.759766 9.23242H9.48828L9.54395 9.05859L12.1816 0.820312L14.8193 9.05859Z" fill="url(#paint0_linear_261_923)" stroke="#FFBC00" strokeWidth="0.5" />
            <defs>
                <linearGradient id="paint0_linear_261_923" x1="3.19257" y1="15.1447" x2="12.373" y2="15.1447" gradientUnits="userSpaceOnUse">
                    <stop offset="0.9998" stopColor="#FFBC00" />
                    <stop offset="0.9999" stopOpacity="0" />
                    <stop offset="1" />
                </linearGradient>
            </defs>
        </svg>
    )
    const starEmpty = (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1816 0L15.0572 8.98278H24.3632L16.8345 14.5344L19.7102 23.5172L12.1816 17.9656L4.6529 23.5172L7.52859 14.5344L-6.00815e-05 8.98278H9.30587L12.1816 0Z" fill="none" stroke="#FFBC00" strokeWidth="0.5" />
        </svg>
    )

    const fullStars = Math.floor(rating)
    const hasHalfStar = rating - fullStars >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    const stars = (
        <>
            {Array.from({ length: fullStars }).map((_, i) => <span key={`f${i}`}>{starFull}</span>)}
            {hasHalfStar && starHalf}
            {Array.from({ length: emptyStars }).map((_, i) => <span key={`e${i}`}>{starEmpty}</span>)}
        </>
    )

    return (
        <div className="review__comment-wrapper d-flex flex-column">
            <div className="review__star-icon d-none d-md-flex">
                {stars}
            </div>
            <span className="review__desc gs-text order-2">{reviewText}</span>
            <hr className="review__line d-none d-md-flex order-3" />
            <div className="review__client-wrapper order-1 order-md-4 mb-3 mb-md-0">
                <div className="review__client-info">
                    <p>{name}</p>
                    <div className="review__star-icon d-md-none">
                        {stars}
                    </div>
                    <div className="review__client-location d-none d-md-flex">
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 0C2.23571 0 0 2.3475 0 5.25C0 6.555 0.357143 7.7775 1.00714 8.88C1.68571 10.035 2.57857 11.025 3.26429 12.18C3.6 12.7425 3.84286 13.2675 4.1 13.875C4.28571 14.2875 4.43571 15 5 15C5.56429 15 5.71429 14.2875 5.89286 13.875C6.15714 13.2675 6.39286 12.7425 6.72857 12.18C7.41429 11.0325 8.30714 10.0425 8.98571 8.88C9.64286 7.7775 10 6.555 10 5.25C10 2.3475 7.76429 0 5 0ZM5 7.3125C4.01429 7.3125 3.21429 6.4725 3.21429 5.4375C3.21429 4.4025 4.01429 3.5625 5 3.5625C5.98571 3.5625 6.78571 4.4025 6.78571 5.4375C6.78571 6.4725 5.98571 7.3125 5 7.3125Z" fill="white" fillOpacity="0.8" />
                        </svg>
                        <p>{city}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewsItem;
