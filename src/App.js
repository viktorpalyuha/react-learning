import { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asfsa1', name: 'Viktor', age: 21 },
      { id: 'dasdasd', name: 'Johnny', age: 23 },
      { id: 'dasdasdxczx', name: 'Stephanie', age: 19 }
    ],
    showPerson: false
  };

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex(p => p.id === id);
    const person = persons[personIndex];

    person.name = event.target.value;

    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const shouldShow = this.state.showPerson;
    this.setState({
      showPerson: !shouldShow
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              personClicked={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              name={person.name}
              age={person.age}
              key={person.id}
            />
          ))}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1> Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
