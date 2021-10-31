const {Component} = require("react");

export default class FirstComponent extends Component{
    render() {
        return(
            <div className="firstComponent">
                FirstComponent
            </div>
        );
    }
}

export  class SecondComponent extends Component{
    render() {
        return(
            <div className="SecondComponent">
                FirstComponent
            </div>
        );
    }
}