import "./Card.scss";
const Card = (props) => {
    return(
        <div className="card">
            <div className="title">
                <h1>{props.city}</h1>
            </div>
            <img src = {props.img}/>
            <div className="description">
                <p>{props.description}</p>
            </div>
        </div>
        
    )
}

export default Card;