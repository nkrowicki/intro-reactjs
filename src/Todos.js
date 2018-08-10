import React from 'react';

import Todo from './Todo';

export default function Todos({ todos }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">User ID</th>
          <th scope="col">Title</th>
          <th scope="col">Completed</th>
        </tr>
      </thead>
      <tbody>
        {
          todos.map(todo => <Todo key={todo.id} {...todo} />)
        }
      </tbody>
    </table>
  );
}
