import React, { Component } from "react";
import "./App.css";

//npm packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Landing from "./Landing";
import PageNotFound from "./PageNotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
