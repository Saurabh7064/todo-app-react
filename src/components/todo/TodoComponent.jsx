import React, {Component} from "react";

class TodoComponent extends Component{
    render() {
        return (
            <>
                <div>todo component for the id - {this.props.match.params.id}</div>
            </>
        )
    }
}

export default TodoComponent