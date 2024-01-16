import { useState, useEffect } from 'react';
import Disc from '../components/Disc';
import Slider from '../components/Slider';

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
        <div class="flex bg-background px-8 pb-8 text-text">
            {isLoading ? (
                <h2 class="flex h-screen items-center text-3xl">
                    Loading Disc Data...
                </h2>
            ) : (
                // 2 sections for [sidebar | grid]. 2 columns and 10 columns respectively
                <div class="grid grid-cols-12 ">
                    <div class="col-span-2 mr-8 text-text">
                        <div>
                            <h1>Speed:</h1>
                            <Slider min={1} max={13} />
                            <h1>Glide:</h1>
                            <Slider min={1} max={7} />
                            <h1>Turn:</h1>
                            <Slider min={-5} max={1} />
                            <h1>Fade:</h1>
                            <Slider min={0} max={5} />
                        </div>
                        <div class="flex justify-end">
                            <button
                                class="rounded-md bg-primary p-1 hover:bg-red-900"
                                onClick={() => {}}
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>

                    <div class="col-span-10 grid grid-cols-1 items-center justify-end gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {filteredDiscs}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
