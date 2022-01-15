import React from 'react';
import Experience from './components/Experience';
import General from './components/General';
import Education from './components/Education';


class App extends React.Component {

  render () {
    return (
      <div className="App">
        <General />
        <Experience /> 
        <Education /> 
      </div>
  )};
}

export default App;
