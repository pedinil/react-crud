import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {

    super();
    this.state = {

      todos: [
        {
          id: 1,
          name: " "

        },
        {
          id: 2,
          name: 'buy some clothes'
        },
        {
          id: 3,
          name: 'write some code'
        },
        {
          id: 4,
          name: 'watch bathcasts'
        }
      ]

    }
  }
  render() {

    return (
      <div className="App" >

        <ul className="list-group">
          {this.state.todos.map((item) => {

            return <li className="list group item">{item.name}</li>
          })
        }
        </ul>

      </div>
    )
  }
}

export default App;
