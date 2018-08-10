import React from 'react';

export default function Todo({ userId, id, title, completed }) {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{userId}</td>
      <td>{title}</td>
      <td>{completed ? 'YES' : 'NO'}</td>
    </tr>
  );
}
