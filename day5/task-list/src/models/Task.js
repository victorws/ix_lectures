
export default class Task {
  constructor(name, completed) {
    this.id = new Date().getTime();
    this.name = name;
    this.completed = completed;
  }
}