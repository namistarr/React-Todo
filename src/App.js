import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './Todo.css';

const itemData = [
  {
    name: 'Go over TK before lecture',
    id: 1,
    complete: false
  },
  {
    name: 'Eat lunch',
    id: 2,
    complete: false
  },
  {
    name: 'Work on todays project', 
    id:3,
    complete: false
  },
  {
    name: 'Go first @ standup',
    id: 4,
    complete: false
  },
  {
    name: 'Watch Buffy', 
    id: 5,
    complete: false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      name: 'Jessica',
      items: itemData
    };    
  }

  toggleItem = id => {
    console.log(id);
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          return {
            ...item, 
            complete: !item.complete
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(), 
      complete: false
    };
    this.setState({
      items: [...this.state.items, newItem]
    });
  };

  clearComplete = () => {
    console.log('clear complete used')
    this.setState({
      items: this.state.items.filter(item => !item.complete)
    });   
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>GIT 'r Done✍️</h2> 
          <TodoForm 
          addItem={this.addItem}           
          />
        </div>
        <TodoList
          items={this.state.items}
          toggleItem={this.toggleItem}
          clearComplete={this.clearComplete}
        />
      </div>
    );
  }
}

export default App;
