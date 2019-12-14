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
import posed from "react-pose";

import LoginScreen from "../screens/LoginScreen";
import LogOutScreen from "../screens/LogoutScreen";
import TaskScreen from "../screens/TaskScreen";
import AdminActivitiesScreen from "../screens/AdminActivitiesScreen";
import CreateActivityScreen from "../screens/CreateActivityScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ProfileScreen from "../screens/ProfileScreen";

const styles = {
  navLink: {
    color: "#6A6A6A",
    fontSize: 16,
    margin: 0,
    fontFamily: "Helvetica",
    fontWeight: "500",
    textDecoration: "none",
    marginRight: 20
  }
};

const SlideOutMenu = posed.div({
  hidden: { left: -100 },
  visible: { left: 0 }
});

function Navigation(props) {
  console.log(`NAV CALLED ${props}`)
  return (
    <Router>
      <div>
        {props.user ? (
          <div
            style={{
              height: 50,
              width: "100%",
              position: "absolute",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            <div style={{ height: 25, width: 25, backgroundColor: "white" }} />
            <div>
              <Link style={styles.navLink} to="/profile">
                Profile
              </Link>
              <Link style={styles.navLink} to="/logout">
                Log Out
              </Link>
            </div>
          </div>
        ) : null}

        <Switch>
          <Route exact path="/">
            {props.user ? <Redirect to="/tasks" /> : <Redirect to="/login" />}
          </Route>
          <Route path="/signup">
            {props.user ? <Redirect to="/tasks" /> : <SignUpScreen />}
          </Route>
          <Route path="/logout">
            {props.user ? <LogOutScreen /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {props.user ? (props.user.admin_type ? <Redirect to="/admin_activities" /> : <Redirect to="/tasks" />)
              : <LoginScreen />}
          </Route>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route path="/tasks">
            {props.user ? <TaskScreen /> : <Redirect to="/login" />}
          </Route>
          <Route path="/admin_activities">
            {props.user ? <AdminActivitiesScreen /> : <Redirect to="/login" />}
          </Route>
          <Route path="/create_activity">
            {props.user ? <CreateActivityScreen /> : <Redirect to="/login" />}
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
