import Select from 'react-select';
import "./App.css"
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
        <div className='flx'>
            <div className='w20'>
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
            <div>
                <div className='tc'>
                <button class="button button1">Green</button>
                </div>
                <div className = "flxBtn">
                <div>
                <button class="button button1">Green</button>
                </div>
                <div>
                <button class="button button1">Green</button>
                </div>
                <div>
                <button class="button button1">Green</button>
                </div>
                </div>
                <div className='tc'>
                <button class="button button1">Green</button>
                </div>
                <div className='rossDiv'>

                </div>
            </div>
            <div>
            <div>
                <h4>S1</h4>
            </div>
            <div>
                <h4>S2</h4>
            </div>
            <div>
                <h4>S3</h4>
            </div>
            <div>
                <h4>S4</h4>
            </div>
            </div>
        </div>
    );
};

export default App;
