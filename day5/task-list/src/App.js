import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import { Component } from 'react';

import TaskTable from './components/TaskTable';
import AddTask from './components/AddTask';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  onTaskCreated(task) {
    this.state.tasks.push(task);
    this.setState({
      tasks: this.state.tasks
    });
  }

  render() {
    return (
      <div className="container card mt-4 p-4">

        <div className="text-center">
          <h1>Task List</h1>
        </div>

        <hr />

        <div className="text-center">
          <h3>Our simple task list</h3>
        </div>


        <AddTask
          createTask={(task) => this.onTaskCreated(task)}
        />

        <TaskTable tasks={this.state.tasks} />

      </div>
    );
  }
}

export default App;
