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

function setTasks(tasks) {
  console.log("CREATE TASKS ACTION");
  // api request tasks
  return {
    type: "SET_TASKS",
    tasks
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
    color: "#999999"
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

// CreateActivityScreen UI Component
class CreateActivityScreen extends Component {
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
  onChangeTitle = event => {
    this.setState({ title: event.target.value });
  };
  onChangePoints = event => {
    this.setState({ points_reward: event.target.value });
  };
  onChangeFrequency = event => {
    this.setState({ frequency: event.target.value });
  };
  createActivity = () => {
    // TO DO: validation
    const {
      title,
      points_reward,
      frequency,
    } = this.state;
    axios
      .post("/administrators/1/activities", {
        activity: {
          title,
          points_reward,
          frequency,
        }
      })
      .then(response => {
        console.log(response);
        let newTasks = this.props.tasks;
        newTasks.push(response.data.activity)
        console.log(`NEW TASKS: ${newTasks}`)
        this.props.setTasks(newTasks)
      })
      .catch(error => console.log(error));
  };
  render() {
    const {
      title,
      points_reward,
      frequency,
    } = this.state;
    return (
      <div style={styles.container}>
        <p style={styles.title}>Create Activity</p>
        <AdminForm
          title={title}
          onChangeTitle={this.onChangeTitle}
          points_reward={points_reward}
          onChangePoints={this.onChangePoints}
          frequency={frequency}
          onChangeFrequency={this.onChangeFrequency}
        />

        <Link to="/admin_activities" onClick={this.createActivity}>
          <button style={styles.buttonContainer}>
            <div style={styles.button}>
              <p style={styles.buttonLabel}>Create Activity</p>
            </div>
          </button>
        </Link>

      </div>
    );
  }
}

function AdminForm(props) {
  return (
    <div style={styles.textInputContainer}>
      <p style={styles.textInputLabel}>Title</p>
      <input
        type="text"
        value={props.title}
        onChange={props.onChangeTitle}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>Points</p>
      <input
        type="text"
        value={props.points_reward}
        onChange={props.onChangePoints}
        style={styles.textInput}
      />
      <p style={styles.textInputLabel}>Frequency</p>
      <input
        type="text"
        value={props.frequency}
        onChange={props.onChangeFrequency}
        style={styles.textInput}
      />
    </div>
  );
}


// Redux Container that passes in redux state
const Container = connect(
  createStructuredSelector({
    user: state => state.user,
    tasks: state => state.tasks,
    stoof: state => state.stoof
  }),
  { setUser, setTasks }
)(CreateActivityScreen);

// We use the container in other files like a UI component
export default Container;
