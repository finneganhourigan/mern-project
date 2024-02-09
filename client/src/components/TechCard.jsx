const TechCard = (props) => {
    //title, photo, description
    //outlined with a border, similar to Disc.jsx component
    return (
        <div class=" rounded-3xl border-2 border-black p-2 text-center shadow-discShadow ">
            <h1 class="text-lg font-bold">{props.title}</h1>
            <img class="mx-auto" src={props.image} />
            <p>{props.description}</p>
        </div>
    );
};

export default TechCard;
