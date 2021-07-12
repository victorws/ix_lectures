import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
import { Component } from 'react';

import TaskTable from './components/TaskTable';
import AddTask from './components/AddTask';

class App extends Component {

  constructor(props) {
    super(props);

    let tasksString = localStorage.getItem('tasks');
    tasksString = tasksString ? tasksString : '[]';
    const tasks = JSON.parse(tasksString);

    this.state = { tasks: tasks };
  }

  saveTasksState(tasks) {
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onTaskCreated(task) {
    this.state.tasks.push(task);
    this.saveTasksState(this.state.tasks);
  }

  onTaskUpdated(task) {
    const updatedTaskArr = this.state.tasks.map(t => t.id === task.id ? task : t);

    // const updatedTaskArr = [];
    // for (let i = 0; i < this.state.tasks.length; i++) {
    //   const t = this.state.tasks[i];

    //   if (t.id === task.id) {
    //     updatedTaskArr.push(task);
    //   } else {
    //     updatedTaskArr.push(t);
    //   }
    // }

    this.saveTasksState(updatedTaskArr);
  }

  onTaskRemoved(taskId) {
    const updatedTaskArr = this.state.tasks.filter(task => task.id !== taskId);

    this.saveTasksState(updatedTaskArr);
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

        <TaskTable
          tasks={this.state.tasks}
          taskUpdated={(task) => this.onTaskUpdated(task)}
          taskRemoved={(taskId) => this.onTaskRemoved(taskId)}
        />

      </div>
    );
  }
}

export default App;
