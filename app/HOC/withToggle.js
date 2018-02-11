import React from 'react';
import PropTypes from 'prop-types';

const TOGGLE_CONTEXT = '__TOGGLE__';

function withToggle(Component) {
  function Wrapper(props, context) {
    const toggleContext = context[TOGGLE_CONTEXT];
    return (
      <Component
        {...props}
        toggle={toggleContext}
      />
    );
  }

  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  };

  return Wrapper;
}

export { TOGGLE_CONTEXT };
export default withToggle;
