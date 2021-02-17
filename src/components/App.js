import React, {Component, useState} from "react";
import { useLocation, BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Route, Switch, Link } from "react-router";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <>
                        <LocationDisplay/>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Home/>
                        </>
                    </Route>
                    <Route exact path="/about">
                        <>
                        <LocationDisplay/>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <div>You are on the about page</div>
                        </>       
                    </Route>
                    <Route path="*"><div>No math</div></Route>
                </Switch>
                
               </BrowserRouter>
            </div>
        )
    }
}

function Home(){
    return (<div>You are home</div>)
}

export function LocationDisplay(){
    const {pathname}=useLocation();
    return (
    <div data-testid="location-display">
        {pathname}
    </div>
    );
}

export default App;
