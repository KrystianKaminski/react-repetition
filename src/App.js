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
    ],
    otherState: 'some other value'
  })

  const switchNameHandler = () => {
    //console.log('Was clicked!')
    setPersonsState({
      persons: [
        {
          name: 'Maximilian',
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
      ],
    })
  }

  return (
    <div>
      <button
        onClick={switchNameHandler}
      >Switch name
        </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
        </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
}

export default app