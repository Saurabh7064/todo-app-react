import {Component} from "react";
import FirstComponent from "./FirstComponent";

class SecondComponent extends Component{
    render() {
        return(
            <div className="SecondComponent">
                FirstComponent
            </div>
        );
    }
}
export default SecondComponent;
