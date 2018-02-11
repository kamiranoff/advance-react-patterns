import React, { Component } from 'react';

const Message = ({ children, toggle: { isToggled } }) => {
  return isToggled ? children : null;
}

function RPMyToggle({on, toggle}) {
  return (
    <button onClick={toggle}>
      {on ? 'on' : 'off'}
    </button>
  )
}

const RPMyToggleWrapper = RPMyToggle;

export default RPMyToggleWrapper;
