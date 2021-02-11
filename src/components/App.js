import React, {Component, useState} from "react";
import { useLocation, BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import { Route, Switch, Link } from "react-router";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <BrowserRouter>
                <LocationDisplay/>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/about">
                        <div>
                        You are on the about page
                        </div>
                    </Route>
                    <Route path="*">No Math</Route>
                </Switch>
                
               </BrowserRouter>
            </div>
        )
    }
}

function Home(){
    return (<div>You are home</div>)
}

function LocationDisplay(){
    const {pathname}=useLocation();
    return (
    <div data-testid="location-display">
        {pathname}
    </div>
    );
}

export default App;
