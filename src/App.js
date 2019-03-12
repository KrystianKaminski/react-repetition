import React, { useState } from 'react';
import Person from './Person/Person'

const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {
        name: 'Max',
        age: 28
      },
      {
        name: 'Manu',
        age: 29
      },
      {
        name: 'Stephanie',
        age: 26
      }
    ]
  })


  const switchNameHandler = (newName) => {
    //console.log('Was clicked!')
    setPersonsState({
      persons: [
        {
          name: newName,
          age: 28
        },
        {
          name: 'Manu',
          age: 29
        },
        {
          name: 'Stephanie',
          age: 27
        }
      ]
    })
  }

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        {
          name: 'Max',
          age: 28
        },
        {
          name: event.target.value,
          age: 29
        },
        {
          name: 'Stephanie',
          age: 26
        }
      ]
    })
  }

  const [otherState, setOtherState] = useState('some other value')

  const style = {
    container: {
      position: 'relative'
    },
    button: {
      position: 'absolute',
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    },
  }

  return (
    <div>
      <div>
        <button
          style={style.button}
          onClick={() => switchNameHandler('Maximilian!!')}
        >Switch name
        </button>
      </div>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, 'Max!')}
        changed={nameChangedHandler}
      >
        My Hobbies: Racing
        </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div >
  );
}

export default app