import React, { Component } from 'react';
import { render } from 'react-dom';
import Toggle from './Toggle';

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
          onToggle={on => console.log('toggle', on)}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
