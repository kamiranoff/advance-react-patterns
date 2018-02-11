import React from 'react';

function Switch({ isToggled, className = '', ...props }) {
  return (
    <div className="toggle">
      <input
        className="toggle-input"
        type="checkbox"
      />
      <button
        className={`${className} toggle-btn ${isToggled
          ? 'toggle-btn-on'
          : 'toggle-btn-off'}`}
        aria-expanded={isToggled}
        {...props}
      />
    </div>
  )
}

export default Switch;
