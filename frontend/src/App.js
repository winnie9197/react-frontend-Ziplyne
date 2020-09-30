import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import SectionOne from './components/SectionOne.js';
import SectionTwo from './components/SectionTwo.js';

function App() {
  return (
    <div className="App">
		  <Header />
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

export default App;
