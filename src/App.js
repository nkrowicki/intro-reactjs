import React from 'react';

import Todos from './Todos';

class App extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => this.setState({ todos }));
  }

  render() {
    const { todos } = this.state;

    return (
      <section className="container">
        <Todos todos={todos} />
      </section>
    );
  }
}

export default App;
