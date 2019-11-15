import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import TaskScreen from "../screens/TaskScreen";

export default function Navigation() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/tasks">
            <TaskScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
