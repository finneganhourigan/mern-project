const Disc = (props) => {
    return (
        <div className="disc">
            <h1>{props.manufacturer} {props.name}</h1>
            <img src={`/assets/${props.image}`} alt={props.name} />
            <h3>{props.category}</h3>
            <div className="flight-number-grid">
                <p className="flight-num">Speed: {props.speed}</p>
                <p className="flight-num">Turn: {props.turn}</p>
                <p className="flight-num">Glide: {props.glide}</p>
                <p className="flight-num">Fade: {props.fade}</p>
            </div>
            {/* <p>Description: {props.description}</p> */}
        </div>
    );
}

export default Disc;