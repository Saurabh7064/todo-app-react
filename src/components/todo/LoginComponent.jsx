import AuthenticationService from "./AuthenticationService";
import React, {Component} from "react";

class LoginComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: 'saurabh',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }
    // handleUsernameChange(event){
    //     this.setState({username:event.target.value});
    // }
    //
    // handlePasswordChange(event){
    //     this.setState({password:event.target.value});
    // }
    loginClicked() {
        if (this.state.username == 'saurabh' && this.state.password == 'saurabh') {
            AuthenticationService.registerSuccessfulLogin(this.state.username);
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.props.navigate('/welcome')

            // console.log('Succesful')
            // this.setState({showSuccessMessage: true});
            // this.setState({hasLoginFailed: false});
        }
        else{
            console.log('Failed')
            this.setState({showSuccessMessage: false});
            this.setState({hasLoginFailed: true});
        }
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }


}

export default LoginComponent