import React from "react";

import Pagination from "./Pagination";
import Todos from "./Todos";

import Search from "./Search";

class App extends React.Component {
  state = {
    allTodos: [],
    currentPage: 0,
    itemsPerPage: 20,
    filtered: [],
    hasFiltered: false,
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(allTodos => this.setState({ allTodos }));
  }

  onPageChange = currentPage => this.setState({ currentPage });

  onTypeSearch = e => {

    const filtered = this.state.allTodos.filter(
      (todo, index) => todo.title.indexOf(e.target.value) > -1
    );

    this.setState({ filtered, 
      hasFiltered:true,
    currentPage: 0 });

  };

  render() {
    const {
      allTodos,
      currentPage,
      itemsPerPage,
      filtered,
      hasFiltered
    } = this.state;

    console.log('state hasFiltered: ' + hasFiltered)

    //Variable en la que vamos a almacenar la lista a mostrar
    let list;

    if (!hasFiltered) {
      list = allTodos;
    } else list = filtered;

    const todos = list.slice(
      currentPage * itemsPerPage,
      currentPage * itemsPerPage + itemsPerPage
    );
    

    let totalPages = [];
    //La función Math.ceil() devuelve el entero más pequeño mayor o igual a un número dado.
    for (let i = 0, l = Math.ceil(list.length / itemsPerPage); i < l; i++) {
      totalPages.push(i);
    }

    return (
      <section className="container">
        <Search onTypeSearch={this.onTypeSearch} />
        <Todos todos={todos} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={this.onPageChange}
        />
      </section>
    );
  }
}

export default App;
