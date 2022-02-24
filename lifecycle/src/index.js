import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clock: 1000,
      glass: 'water'
    }
  }


  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        glass: 'juice'
      })
    }, 3000)
  }


  alterGlass = () => {
    this.setState({
      glass: 'soda'
    })

    // we could make this using react, but it will not change the permanent state
    // this.state.glass = 'soda'
  }

// to return from JSX we need the render function  
  render() {
    const { clock, glass } = this.state; //destructuring
    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterGlass()}><h1>{glass}</h1></button>
      </div>
    )
  }

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);