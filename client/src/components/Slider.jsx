import { useState } from 'react';

const Slider = ({ min, max }) => {
    const [value, setValue] = useState(min);

    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(value);
    };

    return (
        <div class="mb-4 mt-2 flex items-center">
            <div class="w-[85%]">
                <input
                    type="range"
                    id="slider"
                    min={min}
                    max={max}
                    step={1}
                    value={value}
                    onChange={handleChange}
                    class="w-full"
                />
            </div>

            <label
                for="slider"
                class="ml-2 w-8 border-2 border-white text-center xl:border-solid"
            >
                {value}
            </label>
        </div>
    );
};

export default Slider;
