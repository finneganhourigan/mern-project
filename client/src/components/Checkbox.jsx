const Checkbox = ({ label, onChange, checkboxStatesIndex, checked }) => {
    const handleChange = (event) => {
        onChange(event, label, checkboxStatesIndex);
    };

    return (
        <div class="flex items-center">
            <input
                type="checkbox"
                checked={checked}
                // value={checked}
                onChange={handleChange}
            />
            <label class="ml-2 overflow-hidden">{label}</label>
        </div>
    );
};

export default Checkbox;
