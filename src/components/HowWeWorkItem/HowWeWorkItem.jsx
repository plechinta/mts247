import "./HowWeWorkItem.css"

function HowWeWorkItem(props) {
    
    return (
            <div className="work-item__card">
                <div className="work-item__text">
                    <p className="work-item__title gs-text__h5">{props.title}</p>
                    <p className="work-item__desc gs-text">{props.description}</p>
                </div> 
                <img className="work-item__img" src={props.pic} alt="" />
            </div>
            

    )
}

export default HowWeWorkItem;