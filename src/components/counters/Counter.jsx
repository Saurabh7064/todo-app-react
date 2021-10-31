import {Component} from "react";
import './counter.css';
class Counter extends Component{
    render() {
        return(
            <div className="counter">
                 <button>+1</button>
                <span className="count">0</span>
            </div>
        );
    }
}

export default Counter;