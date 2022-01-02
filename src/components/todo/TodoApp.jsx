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

    constructor(props) {
        super(props);
        this.state = {
            username: 'saurabh',
            password: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }

    handleUsernameChange(event){
        this.setState({username:event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password:event.target.value});
    }

    render() {
        return(
            <div>
                UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/><br/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/><br/>
                <button>Login</button>
            </div>
        )
    }
}

export default TodoApp