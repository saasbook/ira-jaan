import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Redux action that calls API
function setUser({ username, password }) {
  console.log("GET THINGS ACTION");
  //   try login
  return {
    type: "SET_USER",
    user: { username }
  };
}

// Component Styles
const styles = {
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100vh",
    margin: 0
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    fontFamily: "Avenir"
  }
};

// LoginScreen UI Component
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }
  onChangeUsername(event) {
    this.setState({ username: event.target.value });
  }
  onChangePassword(event) {
    this.setState({ password: event.target.value });
  }
  handleLogIn = () => {
    const { username, password } = this.state;
    this.props.setUser({ username, password });
  };
  render() {
    return (
      <div style={styles.container}>
        <p>Login</p>
        <input
          type="text"
          value={this.state.username}
          onChange={this.onChangeUsername}
        />
        <input
          type="text"
          value={this.state.password}
          onChange={this.onChangePassword}
        />
        <button
          title="GET THINGS"
          style={{ width: 300 }}
          onClick={this.handleLogIn}
        />
        <p>{this.props.user ? this.props.user.username : ""}</p>
        <p>{this.props.stoof}</p>
      </div>
    );
  }
}

// Redux Container that passes in redux state
const Container = connect(
  createStructuredSelector({
    user: state => state.user,
    stoof: state => state.stoof
  }),
  { setUser }
)(LoginScreen);

// We use the container in other files like a UI component
export default Container;
