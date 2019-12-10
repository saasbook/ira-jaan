import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

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
    // flexDirection: "column",
    // flex: 1,
    height: "100vh",
    margin: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  container_left: {
    float: "left",
    width: "49%",
    marginLeft: "8%",
    alignItems: "center",
    justifyContent: "center"
  },
  container_right: {
    float: "left",
    width: "49%",
    marginLeft: "8%",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 45,
    fontWeight: "800",
    fontFamily: "Helvetica",
    color: "#383838",
    margin: 0
  },
  textInput: {
    height: 45,
    width: 250,
    padding: 0,
    borderWidth: 0,
    borderColor: "transparent",
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: "#F4F4F4"
  },
  button: {
    height: 50,
    width: 150,
    marginTop: 20,
    backgroundColor: "#6C72F8",
    borderRadius: 5,
    borderWidth: 0,
    borderColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Helvetica",
    color: "#FFFFFF",
    margin: 0,
    padding: 0
  },
  textInputContainer: {
    marginTop: 35,
    marginBottom: 25,
    flexDirection: "column",
    display: "flex"
  },
  textInputLabel: {
    color: "#6A6A6A",
    fontSize: 14,
    margin: 0,
    marginTop: 20,
    fontFamily: "Helvetica",
    fontWeight: "800"
  },
  textSubtext: {
    color: "#6A6A6A",
    fontSize: 24,
    margin: 0,
    marginTop: 20,
    fontFamily: "Helvetica",
    fontWeight: "1000"
  },
  textParagraph: {
    color: "#6A6A6A",
    fontSize: 18,
    margin: 0,
    marginTop: 20,
    fontFamily: "Helvetica",
    // fontWeight: "800"
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
    console.log("HERE", this.state);
    // see if user exists and if so then setUser
    // axios
    //   .post("admin/create", {
    //     administrator: {
    //       username: "shawn9",
    //       password: "shawn",
    //       name: "shawn",
    //       age: "99",
    //       email: "shawn@shawn.com",
    //       language: "English",
    //       description: "",
    //       points: 0
    //     }
    //   })
    //   .then(response => {
    //     let administrator = response.data.administrator;
    //     this.props.setUser(administrator);
    //   })
    //   .catch(error => console.log(error));
    this.props.setUser({ username, password });
  };
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.container_left}>
          <p style={styles.title}>Ira Jaan Foundation</p>
          <p style={styles.textSubtext}>Empowering communities for a brighter future</p>
        </div>
        <div style={styles.container_right}>
          <p style={styles.title}>Sign In</p>
          <div style={styles.textInputContainer}>
            <p style={styles.textInputLabel}>USERNAME</p>
            <input
              type="text"
              value={this.state.username}
              onChange={this.onChangeUsername}
              style={styles.textInput}
            />
            <p style={styles.textInputLabel}>PASSWORD</p>
            <input
              type="text"
              value={this.state.password}
              onChange={this.onChangePassword}
              style={styles.textInput}
            />
          </div>
          <button style={styles.button} onClick={this.handleLogIn}>
            <p style={styles.buttonLabel}>Sign In</p>
          </button>
          <Link to="/signup" style={styles.textInputLabel}>
            <p>Don't have an account? Sign up</p>
        </Link>
        </div>
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
  {setUser}
        )(LoginScreen);
        
        // We use the container in other files like a UI component
        export default Container;
