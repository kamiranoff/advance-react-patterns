import React, { Component } from 'react';

class RPToggle extends Component {
  static defaultProps = {
    onToggle: () => {
    }
  }
  state = { isToggled: false }
  toggle = () =>
    this.setState(
      ({ isToggled }) => ({ isToggled: !isToggled }),
      () => this.props.onToggle(this.state.isToggled),
    );

  render() {
    return this.props.render({
      isToggled: this.state.isToggled,
      toggle: this.toggle,
    })
  }
}

export default RPToggle;
