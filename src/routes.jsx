import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Article from "./pages/Article";
import Groups from "./pages/Groups";
import GroupChat from "./pages/GroupChat";
import SignUp from "./pages/SignUp";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/articles/" component={Article} />
        <Route exact path="/groups" component={Groups} />
        <Route exact path="/groups/:id" component={GroupChat} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}
