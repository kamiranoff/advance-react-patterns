import React, { Component } from 'react';
import { render } from 'react-dom';
import Toggle from './components/Toggle';
import MyToggleWrapper from './MyToggle';
import AlertButton from './AlertButton';

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
          onToggle={isToggled => isToggled ? this.myToggle.focus() : null}
        >
          <Toggle.On>The button is on</Toggle.On>
          <div>
            <Toggle.Button />
          </div>
          <Toggle.Off>The button is off</Toggle.Off>
          <br />
          <hr />
          <MyToggleWrapper innerRef={myToggle => this.myToggle = myToggle} />
          <br />
          <hr />
          <AlertButton
            event="onClick"
            isToggled={e => alert(e.type)}
          />
        </Toggle>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
