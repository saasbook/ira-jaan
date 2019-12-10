import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import axios from "axios";

// Component Styles
const styles = {
  container: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100vh",
    margin: 0,
    paddingLeft: 95,
    paddingRight: 95
  },
  header: {
    fontSize: 70,
    fontWeight: "800",
    fontFamily: "Helvetica",
    color: "#383838",
    margin: 0,
    padding: 0,
    marginTop: 40
  },
  columnHeader: {
    fontSize: 32,
    fontWeight: "800",
    fontFamily: "Helvetica",
    color: "#383838",
    margin: 0,
    padding: 0,
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 35
  },
  taskContainer: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    flex: 1,
    margin: 0,
    borderRadius: 10,
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
    marginBottom: 60,
    marginTop: 40
  },
  taskName: {
    fontSize: 25,
    fontFamily: "Helvetica",
    color: "#383838",
    fontWeight: "600",
    marginLeft: 15
  },
  emptyCheckBox: {
    height: 20,
    width: 20,
    borderRadius: 5,
    border: "3px solid #383838",
    marginLeft: 40
  },
  fullCheckBox: {
    height: 20,
    width: 20,
    borderRadius: 5,
    border: "3px solid #605bfc",
    marginLeft: 40,
    backgroundColor: "#605bfc"
  },
  taskCell: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  taskList: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  },
  divider: {
    width: 1,
    backgroundColor: "#E4E4E4"
  },
  avatarContainer: {
    borderRadius: 1000,
    backgroundColor: "#605bfc",
    height: 90,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    margin: 20
  },
  avatarInitials: {
    padding: 0,
    margin: 0,
    fontFamily: "Helvetica",
    fontWeight: "900",
    fontSize: 45,
    color: "white"
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    margin: 20
  },
  nameContainer: {
    padding: 0,
    margin: 0,
    fontFamily: "Helvetica",
    fontWeight: "900",
    fontSize: 45,
    color: "#383838"
  },
  pointsContainer: {
    padding: 0,
    margin: 0,
    fontFamily: "Helvetica",
    fontWeight: "400",
    fontSize: 23,
    color: "#9C9C9C"
  },
  bioContainer: {
    display: "flex",
    flexDirection: "row"
  },
  bio: {
    padding: 0,
    fontFamily: "Helvetica",
    fontWeight: "350",
    fontSize: 23,
    color: "#9C9C9C",
    margin: 20
  }, 
  profileContainer: {
    display: "flex",
    flexDirection: "column"
  },
  infoRow: {
    display: "flex",
    flexDirection: "row",
  }
};

// TaskScreen UI Component
class TaskScreen extends Component {
  componentDidMount() {
    // axios
    //   .get("/tasks/index")
    //   .then(response => {
    //     let tasks = response.data;
    //     this.props.setTasks(tasks);
    //   })
    //   .catch(error => console.log(error));
  }
  render() {
    return (
      <div style={styles.container}>
        <p style={styles.header}>Profile</p>
        <div style={styles.taskContainer}>
          <div style={styles.profileContainer}>
          <div style={styles.infoRow}>
          <div style={styles.avatarContainer}>
            <p style={styles.avatarInitials}>CN</p>
          </div>
          <div style={styles.infoContainer}>
            <p style={styles.nameContainer}>Christine Nguyen</p>
            <p style={styles.pointsContainer}>Age 6</p>
            <p style={styles.pointsContainer}>🎁12</p>
          </div>
          </div>
          <div>
            <p style={styles.bio}>Hello! My name is Christine and I like to play soccer and climb trees. I want to be a firefighter in the future.</p>
          </div>
          </div>
          {/* <t>Christine Nguyen</t> */}
          {/* <div style={styles.taskList}>
            <p style={styles.columnHeader}>To-do</p>
            {this.props.tasksToDo.length
              ? this.props.tasksToDo.map(task => <TaskCell task={task} />)
              : null}
          </div> */}
          {/* <Divider /> */}
          {/* <div style={styles.taskList}>
            <p style={styles.columnHeader}>Done</p>
            {this.props.tasksCompleted.length
              ? this.props.tasksCompleted.map(task => <TaskCell task={task} />)
              : null}
          </div> */}
        </div>
      </div>
    );
  }
}

function Divider() {
  return <div style={styles.divider} />;
}

function TaskCell(props) {
  return (
    <div style={styles.taskCell}>
      <div
        style={
          props.task.status === "COMPLETED"
            ? styles.fullCheckBox
            : styles.emptyCheckBox
        }
      />
      <p style={styles.taskName}>{props.task.name}</p>
    </div>
  );
}

// Redux Container that passes in redux state
const Container = connect(
  createStructuredSelector({
    user: state => state.user,
    tasksToDo: state => state.tasks.filter(task => task.status !== "COMPLETED"),
    tasksCompleted: state =>
      state.tasks.filter(task => task.status === "COMPLETED")
  }),
  null
)(TaskScreen);

// We use the container in other files like a UI component
export default Container;
