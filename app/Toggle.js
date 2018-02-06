import React, { Component } from 'react';
import Switch from './Switch';

const ToggleOn = ({ toggleState, children }) => {
  return toggleState ? children : null;
}

const ToggleOff = ({ toggleState, children }) => (
  toggleState ? null : children
);

const ToggleButton = ({ toggleState, toggle, ...props }) => (
  <Switch
    toggleState={toggleState}
    onClick={toggle}
    {...props}
  />
);

class Toggle extends Component {
  static On = ToggleOn;
  static Off = ToggleOff;
  static Button = ToggleButton;
  static defaultProps = {
    onToggle: () => {
    }
  }
  state = { toggleState: false }
  toggle = () =>
    this.setState(
      ({ toggleState }) => ({ toggleState: !toggleState }),
      () => {
        this.props.onToggle(this.state.toggleState)
      },
    );

  render() {
    const children = React.Children.map(
      this.props.children,
      child => React.cloneElement(child, {
        toggleState: this.state.toggleState,
        toggle: this.toggle,
      })
    )
    return (
      <div>{children}</div>
    );
  }
}

export default Toggle;
