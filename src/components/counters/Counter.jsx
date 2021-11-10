import React, {Component} from "react";
import './counter.css';
import PropTypes from "prop-types";

class Counter extends Component{
    render() {
        return (
            <div className="App">
                <CounterButton></CounterButton>
                <CounterButton by={5}></CounterButton>
                <CounterButton by={10}></CounterButton>
            </div>
        );
    }
}
class CounterButton extends Component{

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

CounterButton.defaultProps = {
    by:1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter;