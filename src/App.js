import React from 'react';

import Pagination from './Pagination';
import Todos from './Todos';

class App extends React.Component {
  state = {
    allTodos: [],
    currentPage: 0,
    itemsPerPage: 20,
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(allTodos => this.setState({ allTodos }));
  }

  onPageChange = currentPage => this.setState({ currentPage });

  render() {
    const { allTodos, currentPage, itemsPerPage } = this.state;

    const todos = allTodos.slice(currentPage * itemsPerPage, (currentPage * itemsPerPage) + itemsPerPage);

    let totalPages = [];
    for (let i = 0, l = Math.ceil(allTodos.length / itemsPerPage); i < l; i++) {
      totalPages.push(i);
    }

    return (
      <section className="container">
        <Todos todos={todos} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={this.onPageChange} />
      </section>
    );
  }
}

export default App;
