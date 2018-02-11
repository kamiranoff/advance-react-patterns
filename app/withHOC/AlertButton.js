import React from 'react';
import withToggle from './HOC/withToggle';

const AlertButton = withToggle(({ toggle, isToggled, event }) => {
  const props = { [event]: isToggled };
  return toggle.isToggled ? (<button {...props}>The {event} fancy alert</button>) : null;
});

export default AlertButton;
