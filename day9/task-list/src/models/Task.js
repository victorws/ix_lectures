
export default class Task {

  static fromDocument(doc) {
    const task = new Task('');

    const data = doc.data();
    task.id = doc.id;
    task.completed = data.completed;
    task.name = data.name;

    return task;
  }

  constructor(name) {
    this.id = null;
    this.completed = false;
    this.name = name;
  }
}