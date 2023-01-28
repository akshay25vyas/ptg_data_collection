import React, { useState } from 'react'
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
    //useState
    const getData = async() => {
        console.log("here")
        const getData = await fetch('http://localhost:8000/insert')
        const showData = await getData.json()
        console.log(showData)
    
    }
    
    
    const generateDiv = () => {
        //replace this with onclick upload button - use useState for setting up response
        const res = ['S1','S2','S3','S4', 'S5']
        return res.map((elem, index) => {
            return  <div key={index}>
            <h4>{elem}</h4>
        </div>
        })
    }

    
    return (
        <div className='flx'>
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
            <div>
                <div className='tc'>
                <button onClick = {()=>{
                    getData()
                }} className="button button1">Info</button>
                </div>
                <div className = "flxBtn">
                <div>
                <button className="button button1">Green</button>
                </div>
                <div>
                <button className="button button1">Green</button>
                </div>
                <div>
                <button className="button button1">Green</button>
                </div>
                </div>
                <div className='tc'>
                <button className="button button1">Green</button>
                </div>
                <div className='rossDiv'>

                </div>
            </div>
            <div>
                {generateDiv()}
            </div>
        </div>
    );
};

export default App;
