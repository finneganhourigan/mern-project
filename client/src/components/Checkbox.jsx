import { useState } from 'react';

const Checkbox = ({ brand }) => {
    const [checked, setChecked] = useState(false);

    return (
        <div class="flex items-center">
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            <label class="ml-2 overflow-hidden">{brand}</label>
        </div>
    );
};

export default Checkbox;
