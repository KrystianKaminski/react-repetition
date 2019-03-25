import React from 'react';
import classes from './App.module.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';

class App extends React.Component {

  state = {
    persons: [
      { id: 'adasda', name: 'Max', age: 28 },
      { id: '113', name: 'Manu', age: 29 },
      { id: 'asdas', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    authenticated: false
  }


  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  loginHandler = () => {
    this.setState({
      authenticated: true
    })
  }

  render() {
    let persons = null

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
    }

    return (
      <div
        className={classes.App}
      >
        <button
          onClick={() => {
            this.setState({
              showCockpit: false
            })
          }}
        >
          Remove Cockpit
          </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
          />
        ) : null}
        {persons}
      </div>
    )
  }
}


export default App