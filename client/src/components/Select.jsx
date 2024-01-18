const Select = ({ onChange }) => {
    return (
        <div class="flex items-center justify-end bg-background px-8 py-2">
            <h1>Sort by:</h1>
            <select class="mx-2 bg-background" onChange={onChange}>
                <option value="Top Selling">Top Selling</option>
                <option value="Name">Name</option>
            </select>
        </div>
    );
};

export default Select;
