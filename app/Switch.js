import React from 'react';

function Switch({ toggleState, className = '', ...props }) {
  return (
    <div className="toggle">
      <input
        className="toggle-input"
        type="checkbox"
      />
      <button
        className={`${className} toggle-btn ${toggleState
          ? 'toggle-btn-on'
          : 'toggle-btn-off'}`}
        aria-expanded={toggleState}
        {...props}
      />
    </div>
  )
}

export default Switch;
