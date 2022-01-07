import FirstComponent from "./components/learning-examples/FirstComponent";
import SecondComponent from "./components/learning-examples/SecondComponent";
import ThirdComponent from "./components/learning-examples/ThirdComponent";

import React, { Component } from 'react';
import './App.css';
import Counter from "./components/counters/Counter";
import TodoApp from "./components/todo/TodoApp";
import './bootstrap.css';



class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Counter></Counter>*/}
            <TodoApp/>
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