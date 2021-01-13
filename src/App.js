import React, { useState } from 'react';
import ResultComponent from '/components/ResultComponent';
import KeypadComponent from '/components/KeypadComponent';

const App = () => {
  const [num, calc] = useState(0);

  calculate = () => {
    try {
      result: (eval(count) || "") + ""
    } catch (e) {
      result: "error"
    }
  };

  reset = () => {
    result: 0
  };

  backspace = () => {
    result: num.slice(0, -1)
  };

  render() {
    return (
      <div>
        <div className="calc-body">
          <ResultComponent {num}/>
          <KeypadComponent onClick={this.onClick}/>
        </div>
      </div>
    )
  }
}

export default App;
