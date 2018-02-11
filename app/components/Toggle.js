import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch';
import withToggle, { TOGGLE_CONTEXT } from '../HOC/withToggle';

const ToggleOn = ({ children, toggle: { isToggled } }) => {
  return isToggled ? children : null;
};

const ToggleOff = ({ children, toggle: { isToggled } }) => {
  return isToggled ? null : children;
};

const ToggleButton = ({ toggle: { isToggled, toggle }, ...props }) => {
  return (
    <Switch
      toggleState={isToggled}
      onClick={toggle}
      {...props}
    />
  );
};

class Toggle extends Component {
  static On = withToggle(ToggleOn);
  static Off = withToggle(ToggleOff);
  static Button = withToggle(ToggleButton);
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
