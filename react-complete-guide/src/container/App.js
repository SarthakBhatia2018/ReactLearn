import React, { Component } from 'react';
import './App.css';
import Person from '../Persons/Person/Person';
import Radium from 'radium'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Sarthak", age: 21 },
      { id: '2', name: "Saurabh", age: 26 },
      { id: '3', name: "Utsav", age: 23 }
    ],
    toggle: true
  }

  deletePersonHandler(index) {
    // const person = [...this.state.persons]
    const person = this.state.persons.slice()
    person.splice(index, 1);
    this.setState({
      persons: person
    })
  }

  nameChangeHandler = (event, id) => {
    const persons = [...this.state.persons]
    const index = persons.findIndex(
      (person) => id === person.id)
    persons[index].name = event.target.value;
    this.setState({
      persons: persons
    })
  }

  togglePerson = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid black",
      padding: "5px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    }

    let person = null;

    if (this.state.toggle) {
      person = (
        <div>
          {this.state.persons.map((person, index) =>
            <ErrorBoundary key={person.id}>
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            </ErrorBoundary>)}
        </div>
      )
      style.backgroundColor = "red"
      style[":hover"] =
      {
        backgroundColor: "blue",
        color: "black"
      }
    }

    // const classes = ['red', 'bold'].join(' ')
    let classes = ''
    if (this.state.persons.length < 2)
      classes = ['red', 'bold'].join(' ')


    return (
      <div className="App" >
        <p className={classes}>Hello from React App</p>
        {/* <button style={style} onClick={() => this.handleSubmit("Ravi")}>Submit</button> */}
        <button style={style} onClick={this.togglePerson}>Toggle</button>
        {person}
      </div >
    )
  }
}

export default Radium(App);




// const [personState, setPersonState] = useState({
//   person: [
//     { name: "Sarthak", age: 21 },
//     { name: "Saurabh", age: 26 }
//   ]
// })

// const [otherState, setOtherState] = useState({gender: "Male"})

// console.log(personState,otherState);
// const handleSubmit = () => {
//   setPersonState({
//     person: [
//       {
//         name: "Mahi", age: "20",
//       }, {
//         name: "Shruti", age: "21"
//       }],
//   })
//   setOtherState({
//     gender:"Female"
//   })
// }
