import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header myevent={(data)=>{
          // console.log('app.js',data)
          // console.log(this.props.children.props.children[1])
          // console.log(this.props.children.props.children[1].props.path)
          // this.props.children.props.children[1].props.path = /search/
        }}>
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
