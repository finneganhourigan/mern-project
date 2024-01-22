import { useState, useEffect } from 'react';
import Disc from '../components/Disc';
import Slider from '../components/Slider';
import Checkbox from '../components/Checkbox';
import Select from '../components/Select';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [discs, setDiscs] = useState([]);
    const [displayedDiscs, setDisplayedDiscs] = useState([]);

    const [speed, setSpeed] = useState(1);
    const [glide, setGlide] = useState(1);
    const [turn, setTurn] = useState(-5);
    const [fade, setFade] = useState(0);

    const [categoryFilter, setCategoryFilter] = useState([]);
    const [brandFilter, setBrandFilter] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/discs')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDiscs(data);

                setDisplayedDiscs(
                    data.map((disc) => {
                        return (
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
                        );
                    }),
                );

                setIsLoading(false);
            })
            .catch((error) => {
                console.log('disc fetch error: ', error);
            });
    }, []);

    const handleSortOrderChange = (event) => {
        const selectedSortOrder = event.target.value;
        let orderedDiscs = [...discs];

        if (selectedSortOrder === 'Name') {
            orderedDiscs.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });

            setDisplayedDiscs(
                orderedDiscs.map((disc) => {
                    return (
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
                    );
                }),
            );
        } else if (selectedSortOrder === 'Top Selling') {
            setDisplayedDiscs(
                orderedDiscs.map((disc) => {
                    return (
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
                    );
                }),
            );
        }

        // const updatedSortOrder = selectedSortOrder;
        // console.log(updatedSortOrder);
    };

    const handleSpeedChange = (event) => {
        setSpeed(event.target.value);
        return speed;
    };

    const handleGlideChange = (event) => {
        setGlide(event.target.value);
        return glide;
    };

    const handleTurnChange = (event) => {
        setTurn(event.target.value);
        return turn;
    };

    const handleFadeChange = (event) => {
        setFade(event.target.value);
        return fade;
    };

    const handleCategoryChange = (event, category) => {
        //add/remove checkbox's category to categoryFilter array
        if (event.target.checked) {
            setCategoryFilter([...categoryFilter, category.toLowerCase()]);
        } else {
            setCategoryFilter(
                categoryFilter.filter((cat) => cat !== category.toLowerCase()),
            );
        }

        console.log(categoryFilter);
    };

    const handleBrandChange = (event, brand) => {
        //add/remove checkbox's brand to brandFilter array
        if (event.target.checked) {
            setBrandFilter([...brandFilter, brand]);
        } else {
            setBrandFilter(brandFilter.filter((br) => br !== brand));
        }
        console.log(brandFilter);
    };

    //apply filters based on user's selection of flight numbers, category, and brand
    //filters are applied in sequence, so only user-selected filters apply
    const applyFilters = () => {
        let filteredDiscs = [...discs];
        console.log(filteredDiscs);
        if (!(categoryFilter.length === 0)) {
            filteredDiscs = filteredDiscs.filter((disc) =>
                categoryFilter.includes(disc.category),
            );
        }
        if (!(brandFilter.length === 0)) {
            filteredDiscs = filteredDiscs.filter((disc) =>
                brandFilter.includes(disc.manufacturer),
            );
        }

        console.log(filteredDiscs);

        setDisplayedDiscs(
            filteredDiscs.map((disc) => {
                return (
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
                );
            }),
        );

        if (filteredDiscs.length === 0) {
            setDisplayedDiscs(
                <h2 class="absolute flex h-screen w-[70%] items-center justify-center text-3xl">
                    No discs found. Please adjust your filters and try again.
                </h2>,
            );
        }
    };

    return (
        <div>
            {isLoading ? (
                <h2 class="flex h-screen items-center justify-center text-3xl">
                    Loading Disc Data...
                </h2>
            ) : (
                <div>
                    <div class="sticky top-10">
                        <Select onChange={handleSortOrderChange} />
                    </div>
                    {/* // 2 sections for [sidebar | grid]. 2 columns and 10 columns respectively */}
                    <div class="grid grid-cols-12 px-2 pb-8 md:px-8">
                        <div class="sticky top-12 col-span-3 mr-8 h-[91vh] overflow-auto text-text">
                            <div>
                                <h1 class="text-lg font-bold">Flight</h1>
                                <h2>Speed:</h2>
                                <Slider
                                    min={1}
                                    max={13}
                                    onChange={handleSpeedChange}
                                />
                                <h2>Glide:</h2>
                                <Slider
                                    min={1}
                                    max={7}
                                    onChange={handleGlideChange}
                                />
                                <h2>Turn:</h2>
                                <Slider
                                    min={-5}
                                    max={1}
                                    onChange={handleTurnChange}
                                />
                                <h2>Fade:</h2>
                                <Slider
                                    min={0}
                                    max={5}
                                    onChange={handleFadeChange}
                                />
                            </div>
                            <div class="">
                                <h1 class="text-lg font-bold">Category</h1>
                                <Checkbox
                                    label="Distance Driver"
                                    onChange={handleCategoryChange}
                                />
                                <Checkbox
                                    label="Fairway Driver"
                                    onChange={handleCategoryChange}
                                />
                                <Checkbox
                                    label="Midrange"
                                    onChange={handleCategoryChange}
                                />
                                <Checkbox
                                    label="Putter"
                                    onChange={handleCategoryChange}
                                />
                            </div>
                            <div class="">
                                <h1 class="text-lg font-bold">Brand</h1>
                                <Checkbox
                                    label="Axiom"
                                    onChange={handleBrandChange}
                                />
                                <Checkbox
                                    label="Clash Discs"
                                    onChange={handleBrandChange}
                                />
                                <Checkbox
                                    label="Discraft"
                                    onChange={handleBrandChange}
                                />
                                <Checkbox
                                    label="Dynamic Discs"
                                    onChange={handleBrandChange}
                                />
                                <Checkbox
                                    label="Gateway"
                                    onChange={handleBrandChange}
                                />
                                <Checkbox
                                    label="Infinite Discs"
                                    onChange={handleBrandChange}
                                />
                                <Checkbox
                                    label="Innova"
                                    onChange={handleBrandChange}
                                />
                                <Checkbox
                                    label="Kastaplast"
                                    onChange={handleBrandChange}
                                />
                                <Checkbox
                                    label="Latitude 64"
                                    onChange={handleBrandChange}
                                />
                                <Checkbox
                                    label="MVP"
                                    onChange={handleBrandChange}
                                />
                                <Checkbox
                                    label="Prodigy"
                                    onChange={handleBrandChange}
                                />
                                <Checkbox
                                    label="Thought Space Athletics"
                                    onChange={handleBrandChange}
                                />
                            </div>
                            <div class="my-1 flex justify-end">
                                <button
                                    class="rounded-md bg-primary p-1 hover:bg-red-900"
                                    onClick={() => {
                                        applyFilters();
                                    }}
                                >
                                    Apply Filters
                                </button>
                            </div>
                        </div>

                        <div class="col-span-9 grid grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            {displayedDiscs}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
