const TechCard = (props) => {
    //title, photo, description
    //outlined with a border, similar to Disc.jsx component
    return (
        <div class="col-span-2 h-full rounded-3xl border-2 border-black p-2 text-center shadow-discShadow">
            <h1 class="text-lg font-bold">{props.title}</h1>
            <img class="mx-auto max-h-48" src={props.image} />
            <p>{props.description}</p>
        </div>
    );
};

export default TechCard;
