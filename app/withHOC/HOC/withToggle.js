import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatic from 'hoist-non-react-statics';

const TOGGLE_CONTEXT = '__TOGGLE__';

function withToggle(Component) {
  function Wrapper({ innerRef, ...props }, context) {
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
  Wrapper.WrappedComponent = Component;

  hoistNonReactStatic(Wrapper, Component);
  return Wrapper;
}

export { TOGGLE_CONTEXT };
export default withToggle;
