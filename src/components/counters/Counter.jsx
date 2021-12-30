import React, {Component} from "react";
import './counter.css';
import PropTypes from "prop-types";

class Counter extends Component{

    constructor() {
        super();
        this.state={
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);

    }

    increment(by){
        console.log(`increment from the parent - ${by}`)
        this.setState(
            (prevState)=>{
            return {counter: prevState.counter + by}//+ this.props.by
        });
    }
    decrement(by){
        console.log(`decrement from the parent - ${by}`)
        this.setState(
            (prevState)=>{
                return {counter: prevState.counter - by}//+ this.props.by
            });
    }

    render() {
        const style = {fontSize:"50px", padding:"15px 30px"};

        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span className="count"style={style}>{this.state.counter}</span>
                <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div>
        );
    }

    reset(){
             this.setState( {counter: 0});
     }
}
class CounterButton extends Component{

    constructor() {
        super();
        this.state={
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render() {
        const style = {fontSize:"50px", padding:"15px 30px"};
        return(
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decrement}>-{this.props.by}</button>
            </div>
        );
    }

     increment(){
         this.setState({
            counter: this.state.counter + this.props.by
         });
         this.props.incrementMethod(this.props.by);
    }

    decrement(){
        this.setState({
            counter: this.state.counter - this.props.by
        });
        this.props.decrementMethod(this.props.by);
    }


}

CounterButton.defaultProps = {
    by:1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter;