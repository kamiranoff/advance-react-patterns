import React, { Component } from 'react';
import { render } from 'react-dom';
import Toggle from './components/Toggle';
import MyToggle from './MyToggle';

class App extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: 40,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <Toggle
          onToggle={isToggled => console.log('isToggled', isToggled)}
        >
          <Toggle.On>The button is on</Toggle.On>
          <div>
            <Toggle.Button />
          </div>
          <Toggle.Off>The button is off</Toggle.Off>
          <br />
          <hr />
          <MyToggle />
        </Toggle>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
