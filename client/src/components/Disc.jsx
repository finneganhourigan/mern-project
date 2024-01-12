const Disc = (props) => {
    return (
        <div class="mx-4 my-2 rounded-3xl border-2 border-black p-2 text-center font-shippori shadow-discShadow">
            <h1 class="text-3xl">{props.name}</h1>
            <h3 class="text-2xl">{props.manufacturer}</h3>
            <img
                class="mx-auto my-2 h-auto w-4/5"
                src={`/assets/${props.image}`}
                alt={props.name}
            />
            <h3 class="text-2xl">{props.category}</h3>
            <div class="grid grid-cols-2">
                <p>Speed: {props.speed}</p>
                <p>Turn: {props.turn}</p>
                <p>Glide: {props.glide}</p>
                <p>Fade: {props.fade}</p>
            </div>
        </div>
    );
};

export default Disc;
