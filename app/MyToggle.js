import React from 'react';
import withToggle from './HOC/withToggle';

const MyToggle = withToggle(({ toggle: { isToggled, toggle } }) =>
  <button onClick={toggle}>{isToggled ? 'on' : 'off'}</button>
);

export default MyToggle;
