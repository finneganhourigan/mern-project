import { useState } from 'react';

const Checkbox = ({ label, onChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event) => {
        setIsChecked(!isChecked);
        onChange(event, label);
    };

    return (
        <div class="flex items-center">
            <input
                type="checkbox"
                checked={isChecked}
                // value={isChecked}
                onChange={handleChange}
            />
            <label class="ml-2 overflow-hidden">{label}</label>
        </div>
    );
};

export default Checkbox;
