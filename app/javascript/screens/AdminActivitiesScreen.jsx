import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

// Redux action that calls API
function setTasks(tasks) {
  console.log("SET TASKS ACTION");
  // api request tasks
  return {
    type: "SET_TASKS",
    tasks
  };
}

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
    // paddingBottom: 60
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
  taskPoints: {
    fontSize: 20,
    fontFamily: "Helvetica-Light",
    color: "#757575",
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
    border: "3px solid #6C72F8",
    marginLeft: 40,
    backgroundColor: "#6C72F8"
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
  navLink: {
    color: "#6A6A6A",
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "500",
    textDecoration: "none",
  }
};

// AdminActivitiesScreen UI Component
class AdminActivitiesScreen extends Component {
  componentDidMount() {
    axios
      .get(`administrators/${this.props.user.id}/activities`)
      .then(response => {
        let tasks = response.data.activities;
        this.props.setTasks(tasks);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div style={styles.container}>
        <p style={styles.header}>Hello {this.props.user.name}!</p>
        <div style={styles.taskContainer}>
          <div style={styles.taskList}>
            <div >
                <Link to="/create_activity" style={styles.navLink}>
                    <p>Create Activity</p>
                </Link>
                <p style={styles.columnHeader}>Your created activities</p>
            </div>
            {this.props.tasksToDo.length
              ? this.props.tasksToDo.map(task => <AdminTaskCell task={task} />)
              : null}
          </div>
          {/* <Divider /> */}
          {/* <div style={styles.taskList}> */}
            {/* <p style={styles.columnHeader}>Done</p>
            {this.props.tasksCompleted.length
              ? this.props.tasksCompleted.map(task => <TaskCell task={task} />)
              : null} */}
          {/* </div> */}
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
      <p style={styles.taskName}>{props.task.title}</p>
    </div>
  );
}

function AdminTaskCell(props) {
  return (
    <div style={styles.taskCell}>
      <p style={styles.taskPoints}>{props.task.points_reward}</p>
      <p style={styles.taskName}>{props.task.title}</p>
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
  { setTasks }
)(AdminActivitiesScreen);

// We use the container in other files like a UI component
export default Container;
