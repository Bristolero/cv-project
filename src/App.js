import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import General from './components/General';
import Education from './components/Education';
import Footer from './components/Footer';
import './styles/app.css'

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Header />
        <main>
          <div className='cv-wrapper'>
            <General />
            <Experience /> 
            <Education /> 
          </div>
        </main>
        <Footer />
      </div>
  )};
}

export default App;
