import React, { Component } from 'react';
import withToggle from './HOC/withToggle';

const Message = ({ children, toggle: { isToggled } }) => {
  return isToggled ? children : null;
}

class MyToggle extends Component {
  static Message = withToggle(Message);
  focus = () => this.button.focus();

  render() {
    const { toggle: { isToggled, toggle } } = this.props;
    return (
      <button
        ref={button => (this.button = button)}
        onClick={toggle}>{isToggled ? 'on' : 'off'}
      </button>
    );
  }
}

const MyToggleWrapper = withToggle(MyToggle);

export default MyToggleWrapper;
