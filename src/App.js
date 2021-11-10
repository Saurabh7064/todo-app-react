import FirstComponent from "./components/learning-examples/FirstComponent";
import SecondComponent from "./components/learning-examples/SecondComponent";
import ThirdComponent from "./components/learning-examples/ThirdComponent";

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/counters/Counter";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Counter by={1}></Counter>
                <Counter by={5}></Counter>
                <Counter by={10}></Counter>
            </div>
        );
    }
}
    export default App;
class LearningComponents extends Component {
    render() {
        return (
            <div className="LearningComponents">
                My Hello World
                <FirstComponent></FirstComponent>
                <SecondComponent></SecondComponent>
                <ThirdComponent></ThirdComponent>
            </div>
        );
    }
}