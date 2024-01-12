import { useState, useEffect } from 'react';
import Disc from '../components/Disc';

const Home = () => {
    const [discs, setDiscs] = useState([]);
    const [filteredDiscs, setFilteredDiscs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:4000/api/discs')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDiscs(data);

                setFilteredDiscs(
                    data.map((disc) => {
                        return (
                            <div>
                                <Disc
                                    key={disc._id}
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
                        );
                    }),
                );

                setIsLoading(false);
            })
            .catch((error) => {
                console.log('disc fetch error: ', error);
            });
    }, []);

    return (
        <body class="h-full bg-background text-text">
            {isLoading ? (
                <h2 class="flex h-screen items-center justify-center text-3xl">
                    Loading Disc Data...
                </h2>
            ) : (
                <div class="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredDiscs}
                </div>
            )}
        </body>
    );
};

export default Home;
