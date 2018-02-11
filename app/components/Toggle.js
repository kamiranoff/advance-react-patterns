import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch';
import withToggle, { TOGGLE_CONTEXT } from '../HOC/withToggle';

const ToggleOn = withToggle(({ children, isToggled }) => {
  return isToggled ? children : null;
});

const ToggleOff = withToggle(({ children, isToggled }) => {
  return isToggled ? null : children;
});

const ToggleButton = withToggle(({ toggle, isToggled, ...props }) => {
  return (
    <Switch
      toggleState={isToggled}
      onClick={toggle}
      {...props}
    />
  );
});

class Toggle extends Component {
  static On = ToggleOn;
  static Off = ToggleOff;
  static Button = ToggleButton;
  static defaultProps = {
    onToggle: () => {
    }
  }

  static childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  }

  state = { isToggled: false }
  toggle = () =>
    this.setState(
      ({ isToggled }) => ({ isToggled: !isToggled }),
      () => {
        this.props.onToggle(this.state.isToggled)
      },
    );

  getChildContext() {
    return {
      [TOGGLE_CONTEXT]: {
        isToggled: this.state.isToggled,
        toggle: this.toggle,
      },
    };
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default Toggle;
