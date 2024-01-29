import { useState, useEffect } from 'react';
import Disc from '../components/Disc';
import Slider from '../components/Slider';
import Checkbox from '../components/Checkbox';
import Select from '../components/Select';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [discData, setDiscData] = useState([]); //json data
    const [displayedDiscs, setDisplayedDiscs] = useState([]); //array of Disc components

    //input state variables
    const [speed, setSpeed] = useState('*');
    const [glide, setGlide] = useState('*');
    const [turn, setTurn] = useState('*');
    const [fade, setFade] = useState('*');

    const [categoryFilter, setCategoryFilter] = useState([]);
    const [brandFilter, setBrandFilter] = useState([]);
    const [checkboxStates, setCheckboxStates] = useState(Array(16).fill(false)); //indices 0-3 are categories, rest brands

    const [sortOrder, setSortOrder] = useState('Top Selling');

    useEffect(() => {
        fetch('http://localhost:4000/api/discs')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setDiscData(data);

                setDisplayedDiscs(
                    data.map((disc) => {
                        return (
                            <Disc
                                key={disc._id}
                                id={disc._id}
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

        // handleSortOrderChange();
    }, []);

    const handleSortOrderChange = (event) => {
        //event will be null when called from applyFilters()
        if (event !== null) {
            setSortOrder(event.target.value);
        } else {
            // console.log('Order: ', sortOrder);
            let orderedDiscs = [...discData];
            if (sortOrder === 'Top Selling') {
                return orderedDiscs;
            } else if (sortOrder === 'Name') {
                orderedDiscs.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });
                return orderedDiscs;
            }
        }
    };

    //automatically update displayedDiscs when user selects filters
    useEffect(() => {
        applyFilters();
    }, [sortOrder, categoryFilter, brandFilter, speed, glide, turn, fade]);

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

    //add/remove checkbox's category to categoryFilter array
    const handleCategoryChange = (event, category, index) => {
        const newCheckboxStates = [...checkboxStates];

        if (event.target.checked) {
            setCategoryFilter([...categoryFilter, category.toLowerCase()]);
            newCheckboxStates[index] = true;
            setCheckboxStates(newCheckboxStates);
        } else {
            setCategoryFilter(
                categoryFilter.filter((cat) => cat !== category.toLowerCase()),
            );
            newCheckboxStates[index] = false;
            setCheckboxStates(newCheckboxStates);
        }
    };

    // add/remove checkbox's brand to brandFilter array
    const handleBrandChange = (event, brand, index) => {
        const newCheckboxStates = [...checkboxStates];

        if (event.target.checked) {
            setBrandFilter([...brandFilter, brand]);
            newCheckboxStates[index] = true;
            setCheckboxStates(newCheckboxStates);
        } else {
            setBrandFilter(brandFilter.filter((br) => br !== brand));
            newCheckboxStates[index] = false;
            setCheckboxStates(newCheckboxStates);
        }
    };

    //apply filters based on user's selection of flight numbers, category, and brand
    //filters are applied in sequence, such that only user-selected filters apply
    const applyFilters = (event) => {
        let filteredDiscs = [...handleSortOrderChange(null)];
        // console.log(filteredDiscs);

        if (!(categoryFilter.length === 0)) {
            filteredDiscs = filteredDiscs.filter((disc) =>
                categoryFilter.includes(disc.category.toLowerCase()),
            );
        }
        if (!(brandFilter.length === 0)) {
            filteredDiscs = filteredDiscs.filter((disc) =>
                brandFilter.includes(disc.manufacturer),
            );
        }

        if (speed !== '*') {
            filteredDiscs = filteredDiscs.filter(
                (disc) => Math.floor(disc.speed) === parseInt(speed),
            );
        }
        if (glide !== '*') {
            filteredDiscs = filteredDiscs.filter(
                (disc) => Math.floor(disc.glide) === parseInt(glide),
            );
        }
        if (turn !== '*') {
            filteredDiscs = filteredDiscs.filter(
                (disc) => Math.floor(disc.turn) === parseInt(turn),
            );
        }
        if (fade !== '*') {
            filteredDiscs = filteredDiscs.filter(
                (disc) => Math.floor(disc.fade) === parseInt(fade),
            );
        }

        // console.log(filteredDiscs);

        setDisplayedDiscs(
            filteredDiscs.map((disc) => {
                return (
                    <Disc
                        key={disc._id}
                        id={disc._id}
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

    const resetFilters = (event) => {
        setSpeed('*');
        setGlide('*');
        setTurn('*');
        setFade('*');
        setCategoryFilter([]);
        setBrandFilter([]);
        setCheckboxStates(Array(16).fill(false));
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
                                    val={speed}
                                />
                                <h2>Glide:</h2>
                                <Slider
                                    min={1}
                                    max={7}
                                    onChange={handleGlideChange}
                                    val={glide}
                                />
                                <h2>Turn:</h2>
                                <Slider
                                    min={-5}
                                    max={1}
                                    onChange={handleTurnChange}
                                    val={turn}
                                />
                                <h2>Fade:</h2>
                                <Slider
                                    min={0}
                                    max={5}
                                    onChange={handleFadeChange}
                                    val={fade}
                                />
                            </div>
                            <div class="">
                                <h1 class="text-lg font-bold">Category</h1>
                                <Checkbox
                                    label="Distance Driver"
                                    onChange={handleCategoryChange}
                                    checkboxStatesIndex={0}
                                    checked={checkboxStates[0]}
                                />
                                <Checkbox
                                    label="Fairway Driver"
                                    onChange={handleCategoryChange}
                                    checkboxStatesIndex={1}
                                    checked={checkboxStates[1]}
                                />
                                <Checkbox
                                    label="Midrange"
                                    onChange={handleCategoryChange}
                                    checkboxStatesIndex={2}
                                    checked={checkboxStates[2]}
                                />
                                <Checkbox
                                    label="Putter"
                                    onChange={handleCategoryChange}
                                    checkboxStatesIndex={3}
                                    checked={checkboxStates[3]}
                                />
                            </div>
                            <div class="">
                                <h1 class="text-lg font-bold">Brand</h1>
                                <Checkbox
                                    label="Axiom"
                                    onChange={handleBrandChange}
                                    checkboxStatesIndex={4}
                                    checked={checkboxStates[4]}
                                />
                                <Checkbox
                                    label="Clash Discs"
                                    onChange={handleBrandChange}
                                    checkboxStatesIndex={5}
                                    checked={checkboxStates[5]}
                                />
                                <Checkbox
                                    label="Discraft"
                                    onChange={handleBrandChange}
                                    checkboxStatesIndex={6}
                                    checked={checkboxStates[6]}
                                />
                                <Checkbox
                                    label="Dynamic Discs"
                                    onChange={handleBrandChange}
                                    checkboxStatesIndex={7}
                                    checked={checkboxStates[7]}
                                />
                                <Checkbox
                                    label="Gateway"
                                    onChange={handleBrandChange}
                                    checkboxStatesIndex={8}
                                    checked={checkboxStates[8]}
                                />
                                <Checkbox
                                    label="Infinite Discs"
                                    onChange={handleBrandChange}
                                    checkboxStatesIndex={9}
                                    checked={checkboxStates[9]}
                                />
                                <Checkbox
                                    label="Innova"
                                    onChange={handleBrandChange}
                                    checkboxStatesIndex={10}
                                    checked={checkboxStates[10]}
                                />
                                <Checkbox
                                    label="Kastaplast"
                                    onChange={handleBrandChange}
                                    checkboxStatesIndex={11}
                                    checked={checkboxStates[11]}
                                />
                                <Checkbox
                                    label="Latitude 64"
                                    onChange={handleBrandChange}
                                    checkboxStatesIndex={12}
                                    checked={checkboxStates[12]}
                                />
                                <Checkbox
                                    label="MVP"
                                    onChange={handleBrandChange}
                                    checkboxStatesIndex={13}
                                    checked={checkboxStates[13]}
                                />
                                <Checkbox
                                    label="Prodigy"
                                    onChange={handleBrandChange}
                                    checkboxStatesIndex={14}
                                    checked={checkboxStates[14]}
                                />
                                <Checkbox
                                    label="Thought Space Athletics"
                                    onChange={handleBrandChange}
                                    checkboxStatesIndex={15}
                                    checked={checkboxStates[15]}
                                />
                            </div>
                            <div class="my-1 flex justify-end">
                                <button
                                    class="rounded-md bg-slate-700 p-1 hover:bg-slate-800"
                                    onClick={() => {
                                        resetFilters();
                                    }}
                                >
                                    Reset Filters
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
