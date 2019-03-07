import React from 'react';


class App extends React.Component {
  render() {
    return (
      // <div>
      //   Hello
      // </div>

      React.createElement('div', null, React.createElement('h1', null, 'Does this work?'))
    );
  }
}

export default App;
