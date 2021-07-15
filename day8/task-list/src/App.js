import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import firebase from './firebase/firebase';

import './App.css';
import { Component } from 'react';

import Task from './models/Task';

import TaskTable from './components/TaskTable';
import AddTask from './components/AddTask';

class App extends Component {

  constructor(props) {
    super(props);

    this.db = firebase.firestore();

    // let tasksString = localStorage.getItem('tasks');
    // tasksString = tasksString ? tasksString : '[]';
    // const tasks = JSON.parse(tasksString);

    this.state = { tasks: [] };
  }

  componentDidMount() {
    this.fetchTasks();
  }

  async fetchTasks() {
    try {
      const snapshot = await this.db.collection('tasks').get();
      const tasks = snapshot.docs.map(doc => Task.fromDocument(doc));

      this.setState({ tasks: tasks });

    } catch (err) {
      console.log(err);
    }
  }

  async onTaskCreated(task) {
    try {

      const docRef = this.db.collection('tasks').doc();
      await docRef.set({
        name: task.name,
        completed: task.completed,
      });

      task.id = docRef.id;
      this.state.tasks.push(task);
      this.setState({ tasks: this.state.tasks });

    } catch (err) {
      console.log(err);
    }
  }

  async onTaskUpdated(task) {
    try {

      await this.db.collection('tasks').doc(task.id).update({
        name: task.name,
        completed: task.completed,
      });

      const updatedTaskArr = this.state.tasks.map(t => t.id === task.id ? task : t);
      this.setState({ tasks: updatedTaskArr });

    } catch (err) {
      console.log(err);
    }
  }

  async onTaskRemoved(taskId) {

    try {

      await this.db.collection('tasks').doc(taskId).delete();

      const updatedTaskArr = this.state.tasks.filter(task => task.id !== taskId);
      this.setState({ tasks: updatedTaskArr });

    } catch (err) {
      console.log(err);
    }
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
