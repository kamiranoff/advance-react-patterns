import React from 'react';
import PropTypes from 'prop-types';

const TOGGLE_CONTEXT = '__TOGGLE__';

function withToggle(Component) {
  function Wrapper({innerRef, ...props}, context) {
    const toggleContext = context[TOGGLE_CONTEXT];
    return (
      <Component
        ref={innerRef}
        toggle={toggleContext}
        {...props}
      />
    );
  }

  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  };

  Wrapper.displayName = `withToggle(${Component.displayName || Component.name})`;

  return Wrapper;
}

export { TOGGLE_CONTEXT };
export default withToggle;
