import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SubjectPage from './components/HomePage/SubjectPage'
import BookView from './components/BookInfo/BookView'



class App extends Component {

  render() {
    return (
      <div className="main-container">
        <Router>

          <Route exact path='/' component={SubjectPage} />
          <Route path='/:id' component={BookView}/>

        </Router>
      </div>
    );
  }
}

export default App;
