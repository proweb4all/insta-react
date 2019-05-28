import React from "react";
import "./index.css";
import Header from "./components/header";
import Feed from "./components/feed";
import Profile from "./components/profile";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' component={Feed} exact />
        <Route path='/profile' component={Profile} exact />
      </div>
    </Router>
  );
}

export default App;
