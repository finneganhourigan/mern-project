import { useState, useEffect } from 'react';
import Disc from '../components/Disc';
import Slider from '../components/Slider';
import Checkbox from '../components/Checkbox';

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
        <div class="flex px-8 pb-8">
            {isLoading ? (
                <h2 class="flex h-screen w-screen items-center justify-center text-3xl">
                    Loading Disc Data...
                </h2>
            ) : (
                // 2 sections for [sidebar | grid]. 2 columns and 10 columns respectively
                <div class="grid grid-cols-12 ">
                    <div class="sticky top-4 col-span-3 mr-8 h-screen overflow-auto text-text">
                        <div>
                            <h1 class="text-xl font-bold">Flight</h1>
                            <h2>Speed:</h2>
                            <Slider min={1} max={13} />
                            <h2>Glide:</h2>
                            <Slider min={1} max={7} />
                            <h2>Turn:</h2>
                            <Slider min={-5} max={1} />
                            <h2>Fade:</h2>
                            <Slider min={0} max={5} />
                        </div>
                        <div class="">
                            <h1 class="text-xl font-bold">Brand</h1>
                            <Checkbox brand="Axiom" />
                            <Checkbox brand="Clash Discs" />
                            <Checkbox brand="Discraft" />
                            <Checkbox brand="Dynamic Discs" />
                            <Checkbox brand="Gateway" />
                            <Checkbox brand="Infinite Discs" />
                            <Checkbox brand="Innova" />
                            <Checkbox brand="Kastaplast" />
                            <Checkbox brand="Latitude 64" />
                            <Checkbox brand="MVP" />
                            <Checkbox brand="Prodigy" />
                            <Checkbox brand="Thought Space Athletics" />
                        </div>
                        <div class="my-1 flex justify-end">
                            <button
                                class="rounded-md bg-primary p-1 hover:bg-red-900"
                                onClick={() => {
                                    console.log('Apply Filters');
                                }}
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>

                    <div class="col-span-9 grid grid-cols-1 items-center justify-end gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {filteredDiscs}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
