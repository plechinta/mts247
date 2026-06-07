import "./PortfolioItem.css"

function PortfolioItem(props) {
    return(
        <div className="portfolio__block">
            <img className="portfolio__img" src={props.pic} alt={props.title} />
            <div className="portfolio__overlay"></div>
            <div className="portfolio__txt-container">
                <span className="portfolio__txt">{props.title}</span>
            </div>
        </div>
    )
}

export default PortfolioItem;