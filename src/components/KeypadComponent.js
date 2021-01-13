import React from 'react';

const CalculatorKeys = (props) => {
  return(
    <div>

      <div id="calcKeyGroups">

        <div id="calcKeyGroup">
          <button name="C" onClick={e => this.props.onClick(e.target.name)} className="calcKey">C</button>
          <button name="x" onClick={e => this.props.onClick(e.target.name)} className="calcKey">x</button>
          <button name="+/-" onClick={e => this.props.onClick(e.target.name)} className="calcKey">+/-</button>
          <button name="%" onClick={e => this.props.onClick(e.target.name)} className="calcKey">%</button>
        </div>

        <div id="calcKeyGroup">
          <button name="7" onClick={e => this.props.onClick(e.target.name)} className="calcKey">7</button>
          <button name="8" onClick={e => this.props.onClick(e.target.name)} className="calcKey">8</button>
          <button name="9" onClick={e => this.props.onClick(e.target.name)} className="calcKey">9</button>
          <button name="X" onClick={e => this.props.onClick(e.target.name)} className="calcKey">X</button>
        </div>

        <div id="calcKeyGroup">
          <button name="4" onClick={e => this.props.onClick(e.target.name)} className="calcKey">4</button>
          <button name="5" onClick={e => this.props.onClick(e.target.name)} className="calcKey">5</button>
          <button name="6" onClick={e => this.props.onClick(e.target.name)} className="calcKey">6</button>
          <button name="-" onClick={e => this.props.onClick(e.target.name)} className="calcKey">-</button>
        </div>

        <div id="calcKeyGroup">
          <button name="1" onClick={e => this.props.onClick(e.target.name)} className="calcKey">1</button>
          <button name="2" onClick={e => this.props.onClick(e.target.name)} className="calcKey">2</button>
          <button name="3" onClick={e => this.props.onClick(e.target.name)} className="calcKey">3</button>
          <button name="+" onClick={e => this.props.onClick(e.target.name)} className="calcKey">+</button>
        </div>

        <div id="calcKeyGroup">
          <button name="0" onClick={e => this.props.onClick(e.target.name)} className="calcKey">0</button>
          <button name="." onClick={e => this.props.onClick(e.target.name)} className="calcKey">.</button>
          <button name="÷" onClick={e => this.props.onClick(e.target.name)} className="calcKey">÷</button>
          <button name="=" onClick={e => this.props.onClick(e.target.name)} className="calcKey">=</button>
        </div>

      </div>

    </div>
  )

}

export default KeypadComponent;
