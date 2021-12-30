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
    }

    increment(by){
        console.log(`increment from the parent - ${by}`)
        this.setState(
            (prevState)=>{
            return {counter: prevState.counter + by}//+ this.props.by
        });
    }


    render() {
        const style = {fontSize:"50px", padding:"15px 30px"};

        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment}/>
                <CounterButton by={5} incrementMethod={this.increment}/>
                <CounterButton by={10} incrementMethod={this.increment}/>
                <span className="count"style={style}>{this.state.counter}</span>
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
             </div>
        );
    }

     increment(){
         this.setState({
            counter: this.state.counter + this.props.by
         });
         this.props.incrementMethod(this.props.by);
    }


}

CounterButton.defaultProps = {
    by:1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter;