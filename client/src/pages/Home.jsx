import { useState, useEffect } from "react";
import Disc from "../components/Disc";
import '../styles/home.css';


const Home = () => {
    const [discs, setDiscs] = useState([]);
    const [filteredDiscs, setFilteredDiscs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:4000/api/discs")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setDiscs(data);
                
                setFilteredDiscs(data.map(disc => {
                    return (
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <Disc key={disc._id}
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
                        </div>
                    )
                }));

                setIsLoading(false);
            })
            .catch(error => {
                console.log("disc fetch error: ", error);
            })
    }, []);

    return (
        <div className="home">
            <div className="disc-grid">
                <div className="container-fluid">
                    <div className="row">
                        {isLoading ? <h2>Loading Disc Data...</h2> : <>{filteredDiscs}</>}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;