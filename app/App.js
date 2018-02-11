import React, { Component } from 'react';
import { render } from 'react-dom';
import Switch from './common/Switch';
import Toggle from './withHOC/components/Toggle';

import RPToggle from './renderProps/components/Toggle';
import RPMyToggle from './renderProps/MyToggle';
import MyToggleWrapper from './withHOC/MyToggle';
import AlertButton from './withHOC/AlertButton';

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
        <h1>With Higher Oder Component</h1>
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
          <hr />
          <MyToggleWrapper.Message>Button is toggled</MyToggleWrapper.Message>
          <br />
          <hr />
          <AlertButton
            event="onClick"
            isToggled={e => alert(e.type)}
          />
        </Toggle>

        <h1>With Render Props</h1>

        <RPToggle
          onToggle={isToggled => console.log('toggle', isToggled)}
          render={({ isToggled, toggle, togglerProps }) => (
            <div>
              {isToggled
                ? 'The button is on'
                : 'The button is off'}
              <Switch isToggled={isToggled} {...togglerProps}  />
              <hr />
              <RPMyToggle isToggled={isToggled} toggle={toggle} {...togglerProps} />
            </div>
          )}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
