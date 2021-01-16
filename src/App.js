import { Component } from 'react';
import classes from './App.module.css';
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
    const personIndex = persons.findIndex((p) => p.id === id);
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
    let persons = null;
    let btnClass = [classes.button];
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
      btnClass.push(classes.red);
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1> Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
