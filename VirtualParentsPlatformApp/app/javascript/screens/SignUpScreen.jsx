import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Redirect, Link } from "react-router-dom";

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
    margin: 0,
    alignItems: "center"
    // justifyContent: "center"
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
    color: "#999999"
  },
  selectedRoleName: {
    fontSize: 18,
    padding: 0,
    margin: 0,
    fontFamily: "Helvetica",
    fontWeight: "600",
    color: "#383838"
  }
};

// LoginScreen UI Component
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      selectedRole: "Student"
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
    this.props.setUser({ username, password });
  };
  setSelectedRole = role => {
    this.setState({ selectedRole: role });
  };
  render() {
    const { selectedRole, username, password } = this.state;
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
          password={password}
        />
        <button style={styles.button} onClick={this.handleLogIn}>
          <p style={styles.buttonLabel}>Sign Up</p>
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
        value={props.username}
        onChange={props.onChangeUsername}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>LAST NAME</p>
      <input
        type="text"
        value={props.username}
        onChange={props.onChangeUsername}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>USERNAME</p>
      <input
        type="text"
        value={props.username}
        onChange={props.onChangeUsername}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>PASSWORD</p>
      <input
        type="text"
        value={props.password}
        onChange={props.onChangePassword}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>DATE OF BIRTH</p>
      <input
        type="text"
        value={props.password}
        onChange={props.onChangePassword}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>SELECT PARENT / TEACHER</p>
      <input
        type="text"
        value={props.password}
        onChange={props.onChangePassword}
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
        value={props.username}
        onChange={props.onChangeUsername}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>LAST NAME</p>
      <input
        type="text"
        value={props.username}
        onChange={props.onChangeUsername}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>EMAIL</p>
      <input
        type="text"
        value={props.username}
        onChange={props.onChangeUsername}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>USERNAME</p>
      <input
        type="text"
        value={props.username}
        onChange={props.onChangeUsername}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>PASSWORD</p>
      <input
        type="text"
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
