const Slider = ({ min, max, onChange, val }) => {
    const handleChange = (event) => {
        onChange(event);
    };

    return (
        <div class="mb-2 mt-1 flex items-center">
            <div class="w-[100%]">
                <input
                    type="range"
                    id="slider"
                    min={min}
                    max={max}
                    step={1}
                    value={val}
                    onChange={handleChange}
                    class="w-full"
                />
            </div>

            <label
                htmlFor="slider" //for="slider"
                class="ml-2 w-8 border-2 border-white text-center xl:border-solid"
            >
                {val}
            </label>
        </div>
    );
};

export default Slider;
