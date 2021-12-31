import React, {Component} from "react";

class TodoApp extends Component{
    render() {
        return(
            <div className="TodoApp">
                <LoginComponent></LoginComponent>
            </div>
      )
    }
}

class LoginComponent extends Component{
    render() {
        return(
            <div>
                UserName: <input type="text" name="username"/><br/>
                Password: <input type="password" name="password"/><br/>
                <button>Login</button>
            </div>
        )
    }
}

export default TodoApp