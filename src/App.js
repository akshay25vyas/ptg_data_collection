import Select from 'react-select';
const recipe_name = ["Saab", "Volvo", "BMW"];
function CustomDropdown(props) {
    const options = [
        {value: "aks", label: "Blues"},
        {value: "rock", label: "Rock"},
        {value: "jazz", label: "Jazz"},
        {value: "orchestra", label: "Orchestra"},
    ];
    return (
        <div>
            <Select options={options} />
        </div>
    );
}

const App = () => {
    return (
        <div>
            <div>
                <h4>Recipe name</h4>
                <CustomDropdown/>
            </div>
            <div>
                <h4>Person Id</h4>
                <CustomDropdown/>
            </div>
            <div>
                <h4>Kitchen Id</h4>
                <CustomDropdown/>
            </div>
            <div>
                <h4>Recording Number</h4>
                <CustomDropdown/>
            </div>

        </div>
    );
};

export default App;
