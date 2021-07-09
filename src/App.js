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
import Chats from "./Chats";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:profile">
            <Header backButton="/chats" />
            <Chats />
          </Route>
          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>


      {/* Chats index */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
