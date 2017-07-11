/*es-lint enable*/

import React, { Component } from 'react';
import ReactTransition from 'react-transition-group/CSSTransitionGroup';
import styles from './../assets/styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div id='main-container'>
        <button id='main-button'>test</button>
      </div>

    )
  }
}
    

export default App;
