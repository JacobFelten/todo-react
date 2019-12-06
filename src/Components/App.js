import React from 'react';
import './App.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class App extends React.Component {

  constructor(props) {
    super(props);
    let tasks = [];
    if (JSON.parse(localStorage.getItem('TASKS')) && JSON.parse(localStorage.getItem('TASKS')) != null) {
      tasks = JSON.parse(localStorage.getItem('TASKS'));
    }
    this.state = {
      tasks: tasks,
      task: ""
    };

    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  toggleTaskStatus(index) {
    console.log(index);
    let tasks = JSON.parse(JSON.stringify(this.state.tasks));
    console.log(tasks[index].isComplete);
    tasks[index].isComplete = !tasks[index].isComplete;
    console.log(tasks[index].isComplete);
    this.setState({tasks});
  }

  deleteTask(index) {
    console.log(index);
    let tasks = JSON.parse(JSON.stringify(this.state.tasks));
    tasks.splice(index, 1);
    this.setState({tasks});
  }

  addTask(task) {
    let newTask = {
      task: task,
      isComplete: false
    }
    let tasks = this.state.tasks;
    tasks.push(newTask);
    this.setState({tasks});
  }

  render() {
    localStorage.setItem('TASKS', JSON.stringify(this.state.tasks));
    return (
      <div className="container">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">ToDo List</a>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="content-area row">
            <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2"></div>
            <div className="col-md-8 col-xs-8 col-lg-8 col-sm-8">
              <h2>ToDo List</h2>
              <TaskForm onSubmit={this.addTask} />
              <TaskList tasks={this.state.tasks} toggleTaskStatus={this.toggleTaskStatus}
               deleteTask={this.deleteTask} />
            </div>
            <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
