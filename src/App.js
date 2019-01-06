import React, { Component } from 'react';
import { Provider } from 'react-redux'
import DiscussionContainer from './components/DiscussionContainer'
import './App.css';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <DiscussionContainer />
        </div>
      </Provider>
    );
  }
}

export default App
