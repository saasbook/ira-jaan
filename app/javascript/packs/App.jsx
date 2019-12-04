// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import configureStore from "../configureStore";
import { Provider } from "react-redux";
import LoginScreen from "../screens/LoginScreen";
import TaskScreen from "../screens/TaskScreen";
import Navigation from "./Navigation";

const store = configureStore();

const styles = {
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100vh",
    margin: 0
  }
};

// The root component of the app
const App = () => (
  // Provider is a wrapper for the root that passes in the redux store so the entire app can have access
  <Provider store={store}>
    <div style={styles.container}>
      {/* This is the root navigation component of the app */}
      <Navigation />
    </div>
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement("div"))
  );
});
