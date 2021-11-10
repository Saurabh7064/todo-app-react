import {Component} from "react";
import './counter.css';
class Counter extends Component{

    constructor() {
        super();
        this.state={
            counter : 0
        }
        this.increment = this.increment.bind(this);
    }

    render() {
        const style = {fontSize:"50px", padding:"15px 30px"};
        return(
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <span className="count" style={style}>{this.state.counter}</span>
            </div>
        );
    }

     increment(){
         this.setState({
            counter: this.state.counter+ this.props.by
         });
    }


}

export default Counter;