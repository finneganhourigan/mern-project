import '../styles/disc.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Disc = (props) => {
    return (
        <div className="disc">
            <h1>{props.name}</h1>
            <h3>{props.manufacturer}</h3>
            <img src={`/assets/${props.image}`} alt={props.name} />
            <h3>{props.category}</h3>
            <div className="flight-number-grid">
                <p>Speed: {props.speed}</p>
                <p>Turn: {props.turn}</p>
                <p>Glide: {props.glide}</p>
                <p>Fade: {props.fade}</p>
            </div>
        </div>
    );
}

export default Disc;