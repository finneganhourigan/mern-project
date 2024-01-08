import { useState, useEffect } from "react";
import Disc from "../components/Disc";

const Home = () => {
    const [discs, setDiscs] = useState([]);
    const [shownDiscs, setShownDiscs] = useState([]);

    useEffect(() => {
        const fetchDiscs = async() => {
            const response = await fetch("http://localhost:4000/api/discs");
            const data = await response.json();

            console.log("TEST");
            if(response.ok) {
                setDiscs(data);
            } else {
                console.log("disc fetch error: ", response.status);
            }

            setShownDiscs(data.map(disc => {
                return (
                    <Disc key={disc.id}
                        name={disc.name}
                        manufacturer={disc.manufacturer}
                        speed={disc.speed}
                        glide={disc.glide}
                        turn={disc.turn}
                        fade={disc.fade}
                        category={disc.category}
                        description={disc.description}
                        image={disc.image}
                    />
                )
            }));
        }

        fetchDiscs();
    }, []);

    return (
        <div className="home">
            <div className="disc">
                {shownDiscs}
            </div>
        </div>
    )
}


export default Home;