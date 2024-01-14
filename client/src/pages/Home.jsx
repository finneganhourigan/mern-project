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
        <div class="flex items-center justify-center bg-background px-8 pb-8 text-text">
            {isLoading ? (
                <h2 class="flex h-screen items-center text-3xl">
                    Loading Disc Data...
                </h2>
            ) : (
                // 2 sections for [sidebar | grid]. 2 columns and 10 columns respectively
                <div class="grid grid-cols-12">
                    {/* <div class="grid-cols-1"></div> */}

                    <div class="col-span-2 mr-2 bg-accent text-text">
                        <h1>toggle</h1>
                        <h1>sidebar</h1>
                        <h1>sidebar</h1>
                        <h1>sidebar</h1>
                    </div>

                    <div class="col-span-10 grid grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {filteredDiscs}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
