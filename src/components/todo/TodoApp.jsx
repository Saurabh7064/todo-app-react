import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route, useNavigate, Switch, Link} from 'react-router-dom';
import {render} from "react-dom";
import AuthenticationService from "./AuthenticationService";
import AuthenticatedRoute from "./AuthenticatedRoute";

class TodoApp extends Component{
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent }/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                 </Router>
            </div>

            // <div className="TodoApp">
            //     <LoginComponent></LoginComponent>
            //     <WelcomeComponent></WelcomeComponent>
            // </div>
      )
    }
}
class ListTodosComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todos:[
                {id:1, description: 'Learn React',done:false, targetDate: new Date()},
                {id:2, description: 'Learn JS',done:false, targetDate: new Date()},
                {id:3, description: 'Learn Angular',done:false, targetDate: new Date()}
            ]
        }
    }

    render(){
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                    <thead>
                        <tr>
                             <th>Description</th>
                            <th>Is completed?</th>
                            <th>Target date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.todos.map(
                            todo =>
                                <tr key={todo.id}>
                                     <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

class HeaderComponent extends Component{

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.google.com" className="navbar-brand">Google</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component{
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2018 @saurabh</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component{
    render() {
        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.
                </div>
            </>
        )
    }
}

class WelcomeComponent extends Component{
    render(){
        return(
            <>
                <h1>Welcome!</h1>
        <div className="container">
            Welcome {this.props.match.params.name}.
            You can manage your todos <Link to="/todos">here</Link>.
        </div>
                </>
        )
    }
}

function ErrorComponent(){
        return <div>An error Occured</div>
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