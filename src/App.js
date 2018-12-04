import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header myvalue={this.props.history}>
        {
          // console.log(this.props)
        }
        </Header>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}

export default App;
