import React from 'react';
const TOGGLE_CONTEXT = '__TOGGLE__';
import PropTypes from 'prop-types';

function withToggle(Component) {
  function Wrapper(props, context) {
    const toggleContext = context[TOGGLE_CONTEXT];
    return (
      <Component {...props} {...toggleContext} />
    );
  }

  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  };

  return Wrapper;
}

export { TOGGLE_CONTEXT };
export default withToggle;
