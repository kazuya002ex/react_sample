import React, { Component } from 'react';
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: ''
    };
  }
  onInput = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  
  addTodo = () => {
    const { todos, name } = this.state;
    this.setState({
      todos: [...todos, name]
    });
  }
  removeTodo = (index) => {
    const { todos, name } = this.state;
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    });
  }
  render() {
    const red = {color: '#ed4134'}
    const { todos } = this.state;
    return (
      <div>
        <h2　style={red}>タスク登録</h2>
        <p>なんかの文章</p>
        <input type="text" onInput={this.onInput} />
        <button onClick={this.addTodo} >登録</button>
        <ul>
          {todos.map((todo, index) => <li key={index}>
            {todo}
            <button onClick={() => { this.removeTodo(index) }}>削除</button>
          </li>)}
        </ul>
      </div>
    );
  }
}
