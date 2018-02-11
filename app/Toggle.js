import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch';

const TOGGLE_CONTEXT = '__TOGGLE__';

const ToggleOn = ({ children }, context) => {
  const { toggleState } = context[TOGGLE_CONTEXT];
  return toggleState ? children : null;
}

ToggleOn.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};

const ToggleOff = ({ children }, context) => {
  const { toggleState } = context[TOGGLE_CONTEXT];
  return toggleState ? null : children;
}

ToggleOff.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};

const ToggleButton = (props, context) => {
  const { toggleState, toggle } = context[TOGGLE_CONTEXT];
  return (
    <Switch
      toggleState={toggleState}
      onClick={toggle}
      {...props}
    />
  );
}

ToggleButton.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};

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

  state = { toggleState: false }
  toggle = () =>
    this.setState(
      ({ toggleState }) => ({ toggleState: !toggleState }),
      () => {
        this.props.onToggle(this.state.toggleState)
      },
    );

  getChildContext() {
    return {
      [TOGGLE_CONTEXT]: {
        toggleState: this.state.toggleState,
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
