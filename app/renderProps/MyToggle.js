import React from 'react';

function RPMyToggle({ toggle, isToggled, ...togglerProps }) {
  return (
    <button
      onClick={toggle}
      {...togglerProps}
    >
      {isToggled ? 'on' : 'off'}
    </button>
  )
}

export default RPMyToggle;
