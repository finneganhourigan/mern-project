const Select = ({ onChange }) => {
    const handleChange = (event) => {
        onChange(event);
    };

    return (
        <div class="flex items-center justify-end py-2">
            <h1>Sort Order:</h1>
            <select
                class="ml-2 rounded-md border-2 border-text bg-background px-2 py-1"
                onChange={handleChange}
            >
                <option value="Top Selling">Top Selling</option>
                <option value="Name">Name</option>
            </select>
        </div>
    );
};

export default Select;
