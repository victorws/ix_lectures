import React, { Component } from 'react'

export default class TaskTable extends Component {
  render() {



    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Completed</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.tasks.map(task => {
                return <tr key={task.id}>
                  <th>{task.name}</th>
                  <td>{task.completed ? 'Yes' : 'No'}</td>
                  <td></td>
                </tr>
              })
            }
          </tbody>
        </table>

      </div>
    )
  }
}
