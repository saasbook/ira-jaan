import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";

// Redux action that calls API
function setUser(user) {
  console.log("USER IN ACTION:", user);
  return {
    type: "SET_USER",
    user
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
    margin: 0,
    alignItems: "center",
    paddingBottom: 100
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
    backgroundColor: "#605bfc",
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
    marginTop: 14,
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
  roleSelectorContainer: {
    marginTop: 40,
    backgroundColor: "#E5E5E5",
    borderRadius: 1000,
    display: "flex",
    flexDirection: "row"
  },
  roleCell: {
    flex: 1,
    display: "flex",
    borderRadius: 1000,
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 8,
    paddingBottom: 8,
    margin: 6
  },
  selectedRoleCell: {
    flex: 1,
    display: "flex",
    borderRadius: 1000,
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 8,
    paddingBottom: 8,
    margin: 6,
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
  },
  roleName: {
    fontSize: 18,
    padding: 0,
    margin: 0,
    fontFamily: "Helvetica",
    fontWeight: "600",
    color: "#383838"
  },
  selectedRoleName: {
    fontSize: 18,
    padding: 0,
    margin: 0,
    fontFamily: "Helvetica",
    fontWeight: "600",
    color: "#383838"
  },
  buttonContainer: {
    padding: 0,
    margin: 0,
    borderWidth: 0,
    borderColor: "transparent",
    display: "flex",
    flexDirection: "column",
    outline: "none"
  }
};

// LoginScreen UI Component
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      age: "",
      language: "English",
      selectedRole: "Student",
      email: ""
    };
  }
  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };
  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };
  onChangeFirstName = event => {
    this.setState({ firstName: event.target.value });
  };
  onChangeLastName = event => {
    this.setState({ lastName: event.target.value });
  };
  onChangeAge = event => {
    this.setState({ age: event.target.value });
  };
  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleLogIn = () => {
    const { username, password } = this.state;
    // this.props.setUser({ username, password });
    this.createChild();
  };
  setSelectedRole = role => {
    this.setState({ selectedRole: role });
  };
  createChild = () => {
    // TO DO: validation
    const {
      username,
      password,
      firstName,
      lastName,
      age,
      language
    } = this.state;
    let name = firstName + " " + lastName;
    axios
      .post("/children/create", {
        child: {
          username,
          password,
          name,
          age,
          language,
          description: "",
          points: 0
        }
      })
      .then(response => {
        let child = response.data.child;
        this.props.setUser(child);
      })
      .catch(error => console.log(error));
  };
  createAdmin = () => {
    // TO DO: validation
    const {
      username,
      password,
      firstName,
      lastName,
      age,
      email,
      language,
      description
    } = this.state;
    let name = firstName + " " + lastName;
    axios
      .post("admin/create", {
        administrator: {
          username: "shawn9",
          password: "shawn",
          name: "shawn",
          age: "99",
          email: "shawn@shawn.com",
          language: "English",
          description: "",
          points: 0
        }
      })
      .then(response => {
        let administrator = response.data.administrator;
        this.props.setUser(administrator);
      })
      .catch(error => console.log(error));
  };
  render() {
    const {
      selectedRole,
      username,
      password,
      firstName,
      lastName,
      age,
      email
    } = this.state;
    return (
      <div style={styles.container}>
        {/* <p style={styles.title}>Sign Up</p> */}
        <RoleSelector
          selectedRole={selectedRole}
          setSelectedRole={this.setSelectedRole}
        />
        <RoleForm
          selectedRole={selectedRole}
          username={username}
          onChangeUsername={this.onChangeUsername}
          password={password}
          onChangePassword={this.onChangePassword}
          firstName={firstName}
          onChangeFirstName={this.onChangeFirstName}
          lastName={lastName}
          onChangeLastName={this.onChangeLastName}
          age={age}
          onChangeAge={this.onChangeAge}
          email={email}
          onChangeEmail={this.onChangeEmail}
        />
        <button style={styles.buttonContainer} onClick={this.handleLogIn}>
          <div style={styles.button}>
            <p style={styles.buttonLabel}>Sign Up</p>
          </div>
        </button>
        <Link to="/login" style={styles.textInputLabel}>
          Have an account? Sign in
        </Link>
      </div>
    );
  }
}

function RoleForm(props) {
  if (props.selectedRole === "Student") {
    return StudentForm(props);
  }
  return AdminForm(props);
}

function StudentForm(props) {
  return (
    <div style={styles.textInputContainer}>
      <p style={styles.textInputLabel}>FIRST NAME</p>
      <input
        type="text"
        aria-label="first name"
        value={props.firstName}
        onChange={props.onChangeFirstName}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>LAST NAME</p>
      <input
        type="text"
        aria-label="last name"
        value={props.lastName}
        onChange={props.onChangeLastName}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>USERNAME</p>
      <input
        type="text"
        aria-label="username"
        value={props.username}
        onChange={props.onChangeUsername}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>PASSWORD</p>
      <input
        type="text"
        aria-label="password"
        value={props.password}
        onChange={props.onChangePassword}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>AGE</p>
      <input
        type="text"
        aria-label="age"
        value={props.age}
        onChange={props.onChangeAge}
        style={styles.textInput}
      />
    </div>
  );
}

function AdminForm(props) {
  return (
    <div style={styles.textInputContainer}>
      <p style={styles.textInputLabel}>FIRST NAME</p>
      <input
        type="text"
        aria-label="first name"
        value={props.firstName}
        onChange={props.onChangeFirstName}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>LAST NAME</p>
      <input
        type="text"
        aria-label="first name"
        value={props.lastName}
        onChange={props.onChangeLastName}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>EMAIL</p>
      <input
        type="text"
        aria-label="first name"
        value={props.email}
        onChange={props.onChangeEmail}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>USERNAME</p>
      <input
        type="text"
        aria-label="first name"
        value={props.username}
        onChange={props.onChangeUsername}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>PASSWORD</p>
      <input
        type="text"
        aria-label="first name"
        value={props.password}
        onChange={props.onChangePassword}
        style={styles.textInput}
      />
    </div>
  );
}

function RoleSelector(props) {
  return (
    <div style={styles.roleSelectorContainer}>
      <RoleCell
        name="Student"
        selectedRole={props.selectedRole}
        setSelectedRole={props.setSelectedRole}
      />
      <RoleCell
        name="Teacher"
        selectedRole={props.selectedRole}
        setSelectedRole={props.setSelectedRole}
      />
      <RoleCell
        name="Parent"
        selectedRole={props.selectedRole}
        setSelectedRole={props.setSelectedRole}
      />
    </div>
  );
}

function RoleCell(props) {
  if (props.selectedRole === props.name) {
    return SelectedRoleCell(props);
  }
  return UnselectedRoleCell(props);
}

function SelectedRoleCell(props) {
  return (
    <div style={styles.selectedRoleCell}>
      <a onClick={() => props.setSelectedRole(props.name)}>
        <p style={styles.selectedRoleName}>{props.name}</p>
      </a>
    </div>
  );
}

function UnselectedRoleCell(props) {
  return (
    <div style={styles.roleCell}>
      <a onClick={() => props.setSelectedRole(props.name)}>
        <p style={styles.roleName}>{props.name}</p>
      </a>
    </div>
  );
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
