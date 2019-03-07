import React from 'react';
import Person from './Person/Person'

class App extends React.Component {
  render() {
    return (
      <div>
        Hello
        <Person
          name="Max"
          age="28"
        />
        <Person
          name="Manu"
          age="29"
        >
          My Hobbies: Racing
        </Person>
        <Person
          name="Stephanie"
          age="26"
        />
      </div>
    );
  }
}

export default App;
