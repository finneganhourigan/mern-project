const Disc = (props) => {
    return <div>
        <h2>{props.manufacturer} {props.name}</h2>
        <img src={props.image} alt={props.name} />
        <p>Speed: {props.speed}</p>
        <p>Glide: {props.glide}</p>
        <p>Turn: {props.turn}</p>
        <p>Fade: {props.fade}</p>
        <p>Category: {props.category}</p>
        <p>Description: {props.description}</p>
    </div>
}

export default Disc;