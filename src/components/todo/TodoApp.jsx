import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route, useNavigate, Switch, Link} from 'react-router-dom';
import {render} from "react-dom";

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
                        <Route path="/welcome/:name" component={WelcomeComponent}/>
                            <Route path="/listtodo" component={ListTodosComponent}/>
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
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Is completed?</th>
                            <th>Target date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.todos.map(
                            todo =>
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

class HeaderComponent extends Component{
    render() {
        return(
            <div>
                Header<hr/>
            </div>
        )
    }
}

class FooterComponent extends Component{
    render() {
        return(
            <div>
                <hr/>Footer
            </div>
        )
    }
}

class WelcomeComponent extends Component{
    render(){
        return <div>Welcome {this.props.match.params.name}. Manage your todos here <Link to="/listtodo">here</Link> </div>
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