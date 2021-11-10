import {Component} from "react";
import './counter.css';
class Counter extends Component{

    constructor() {
        super();
        this.state={
            counter : 0,
            secondCounter : 100
        }
        this.increment = this.increment.bind(this);
    }

    render() {
        const style = {fontSize:"50px", padding:"15px 30px"};
        return(
            <div className="counter">
                <button onClick={this.increment}>+1</button>
                <span className="count" style={style}>{this.state.counter}</span>
                <span className="count">{this.state.secondCounter}</span>
            </div>
        );
    }

     increment(){
         this.setState({
            counter: this.state.counter+1,
             secondCounter: this.state.secondCounter+1
         });
    }


}

export default Counter;