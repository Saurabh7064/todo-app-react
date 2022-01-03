import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

class TodoApp extends Component{
    render() {
        return(

            <div className="TodoApp">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<LoginComponent />}></Route>
                        <Route path="/login" element={<LoginComponent />}></Route>
                        <Route path="/welcome" element={<WelcomeComponent />}></Route>
                    </Routes>
                </Router>
                <Router>
                    <Routes>
                         <Route path="/" exact component={LoginComponent}> </Route>
                        <Route path="/login" component={LoginComponent}></Route>
                        <Route path="/welcome" component={WelcomeComponent}></Route>
                       </Routes>
                </Router>
            </div>

            // <div className="TodoApp">
            //     <LoginComponent></LoginComponent>
            //     <WelcomeComponent></WelcomeComponent>
            // </div>
      )
    }
}

class WelcomeComponent extends Component{
    render(){
        return <div>Welcome Home</div>
    }
}

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
             console.log('Succesful')
             this.setState({showSuccessMessage: true});
             this.setState({hasLoginFailed: false});
        }
        else{
            console.log('Failed')
            this.setState({showSuccessMessage: false});
            this.setState({hasLoginFailed: true});
        }
        console.log(this.state);
    }
    render() {
        return(
            <div>
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/><br/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }


}

function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }
    return null;
}

function ShowLoginSuccessMessage(props){
    if(props.showSuccessMessage){
        return <div>Login Succesful</div>

    }
    return null;
}
export default TodoApp