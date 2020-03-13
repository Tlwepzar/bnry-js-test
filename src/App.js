import React from 'react';
import './App.css';
import Slider from './Slider';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return ( <
            div className = "App" >
            <
            Slider / >
            <
            p > { this.state.apiResponse } < /p> <
            /div>
        );
    }
}

export default App;