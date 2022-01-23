import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route, useNavigate, Switch, Link} from 'react-router-dom';
import {render} from "react-dom";
import AuthenticationService from "./AuthenticationService";
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ErrorComponent from "./ErrorComponent";
import LogoutComponent from "./LogoutComponent";
import WelcomeComponent from "./WelcomeComponent";
import TodoComponent from "./TodoComponent";

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
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
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