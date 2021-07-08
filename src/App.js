import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">I am the chatpage :fire</Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>


      {/* <SwipeButtons /> */}
      {/* Chats index */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
