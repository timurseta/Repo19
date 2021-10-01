// src/index.js

import React, { Component } from 'react'; //change this line
import ReactDOM from 'react-dom';
import './index.css';

// Add the following code below this line

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello, React!</h1>
            </div>
        )
    }
}

// Add the following code below this line

ReactDOM.render(<App />, document.getElementById('root'));