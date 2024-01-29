import { Link } from 'react-router-dom';

const Disc = (props) => {
    return (
        <Link to={`/disc/${props.id}`}>
            <div class="h-fit rounded-3xl border-2 border-black p-2 text-center font-shippori shadow-discShadow">
                <h1 class="text-2xl">{props.name}</h1>
                <h3 class="text-xl">{props.manufacturer}</h3>
                <img
                    class="mx-auto my-2 h-auto w-4/5"
                    src={`/assets/${props.image}`}
                    alt={props.name}
                />
                <h3 class="text-xl">{props.category}</h3>
                <div class="grid grid-cols-2">
                    <p class="text-[95%]">Speed: {props.speed}</p>
                    <p class="text-[95%]">Turn: {props.turn}</p>
                    <p class="text-[95%]">Glide: {props.glide}</p>
                    <p class="text-[95%]">Fade: {props.fade}</p>
                </div>
            </div>
        </Link>
    );
};

export default Disc;
