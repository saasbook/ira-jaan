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
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import LoginScreen from "../screens/LoginScreen";
import TaskScreen from "../screens/TaskScreen";
import SignUpScreen from "../screens/SignUpScreen";

function Navigation(props) {
  console.log("USER:", props.user);
  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
        </ul> */}

        <Switch>
          <Route exact path="/">
            {props.user ? <Redirect to="/tasks" /> : <Redirect to="/login" />}
          </Route>
          <Route path="/signup">
            <SignUpScreen />
          </Route>
          <Route path="/login">
            {props.user ? <Redirect to="/tasks" /> : <LoginScreen />}
          </Route>
          <Route path="/tasks">
            <TaskScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// Redux Container that passes in redux state
const Container = connect(
  createStructuredSelector({
    user: state => state.user
  }),
  null
)(Navigation);

// We use the container in other files like a UI component
export default Container;
