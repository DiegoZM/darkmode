import React from 'react';
import DarkMode from './DarkMode';

class App extends React.Component {
    render() {
      return(
        <div className='App'>
          <h1>Hello React!</h1>
          <DarkMode />
        </div>
      );
    }
  }

  export default App;