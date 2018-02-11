import React, { Component } from 'react';
import withToggle from './HOC/withToggle';

class MyToggle extends Component {
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
