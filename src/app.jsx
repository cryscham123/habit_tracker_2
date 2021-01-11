import { Component } from 'react';
import './app.css';
import Nav from "./components/nav";
import Input from "./components/input";
import Habits from "./components/habits";

class App extends Component {
  state = {
    habits : [
        {
            id: 1,
            name: "Reading",
            count: 0,
        },
        {
            id: 2,
            name: "Running",
            count: 0,
        },
        {
            id: 3,
            name: "Coding",
            count: 0,
        },
    ]
  }
  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit)
    habits[index].count++
    this.setState({ habits });
  }
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit)
    const count = habits[index].count -1
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  }
  handleDelete = (habit) => {
    const habits = [...this.state.habits].filter(item => (item.id !== habit.id));
    this.setState({ habits });
  }
  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }]
    this.setState({ habits });
  }
  handleReset = () => {
    const habits = [...this.state.habits].map(habit => {
      habit.count=0;
      return habit; })
    this.setState({ habits });
  }
  render() {
    return (
      <div className="grid">
        <Nav count={this.state.habits.filter(item => (item.count > 0)).length}/>
        <Input
          onAdd={this.handleAdd}
        />
        <Habits
          habits={this.state.habits}
          onIncre={this.handleIncrement}
          onDecre={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <button className="resetBtn" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default App;