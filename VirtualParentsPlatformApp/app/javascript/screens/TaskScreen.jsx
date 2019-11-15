import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Redux action that calls API
function setTasks() {
  console.log("SET TASKS ACTION");
  // api request tasks
  return {
    type: "SET_TASKS",
    tasks: ["task 1", "task 2"]
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

// TaskScreen UI Component
class TaskScreen extends Component {
  componentDidMount() {
    this.props.setTasks();
  }
  render() {
    return (
      <div style={styles.container}>
        {this.props.tasks.length
          ? this.props.tasks.map(task => <p>{task}</p>)
          : null}
      </div>
    );
  }
}

// Redux Container that passes in redux state
const Container = connect(
  createStructuredSelector({
    user: state => state.user,
    tasks: state => state.tasks
  }),
  { setTasks }
)(TaskScreen);

// We use the container in other files like a UI component
export default Container;
