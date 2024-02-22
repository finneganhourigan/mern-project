const Select = ({ onChange }) => {
    const handleChange = (event) => {
        onChange(event);
    };

    return (
        <div class="flex items-center justify-end bg-background py-2">
            <h1>Sort by:</h1>
            <select class="mx-2 bg-background" onChange={handleChange}>
                <option value="Top Selling">Top Selling</option>
                <option value="Name">Name</option>
            </select>
        </div>
    );
};

export default Select;
