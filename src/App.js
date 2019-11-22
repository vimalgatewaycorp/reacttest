import React, { Component } from 'react';
import './App.css';
//import logo from './logo.svg';
import './App.css';
import './products.css';
import Products from './component/Products';

class App extends Component {
  render() {
    return(
      <Products/>
      )
  }
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );  
  const rootElement = document.getElementById(
    'root',
  )

  const element = React.createElement('div',{
    className: 'container',
    children: 'Hello Vimal'
  })

  return ReactDOM.render(element,rootElement)
  */
}

export default App;
