import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import Projects from './components/Projects'
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path ="/" component={Main} />
        <Route exact path ="/projects" component={Projects}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
