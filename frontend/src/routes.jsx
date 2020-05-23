import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ExampleComponent from "./components/ExampleComponent";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ExampleComponent} />
      </Switch>
    </Router>
  );
}
