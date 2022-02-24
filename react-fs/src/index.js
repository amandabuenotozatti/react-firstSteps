import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Button from './Button';

function sum(a, b) {
  alert(a + b);
}

function App() {
  return (
    <div className="app">
      Hello, React!
      <Button onClick={() => sum(10, 20)} name="Amanda Tozatti" />
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);