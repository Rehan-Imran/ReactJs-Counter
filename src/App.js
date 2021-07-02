import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
class App extends Component {
  state = {
    sum: 0,
    counters: [
      { id: 1, value: 0, title: "Bag" },
      { id: 2, value: 0, title: "Walet" },
      { id: 3, value: 0, title: "House" },
      { id: 4, value: 0, title: "Pen" },
      { id: 5, value: 0, title: "Pen" },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
    this.handleTotalCount(counters);
  };
  handleReset = () => {
    const sum = 0;
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ sum, counters });
  };
  findIndex = (counter) => {
    const record = this.state.counters.find((c) => c.id === counter);
    const sum = this.state.sum;
    const counters = [...this.state.counters];
    const index = counters.indexOf(record);
    return { counters, index, sum };
  };
  handleIncrement = (counter) => {
    let { counters, index, sum } = this.findIndex(counter);
    counters[index].value++;
    sum++;
    this.setState({ sum, counters });
  };
  handleDecrement = (counter) => {
    let { counters, index, sum } = this.findIndex(counter);
    if (counters[index].value !== 0) {
      counters[index].value--;
      sum--;
      this.setState({ sum, counters });
    }
  };
  handleTotalCount = (counters) => {
    let sum = counters.reduce((a, b) => ({
      value: a.value + b.value,
    }));
    this.setState({ sum: sum.value });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar sum={this.state.sum} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
          ;
        </main>
      </React.Fragment>
    );
  }
}

export default App;
