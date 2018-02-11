import React from 'react';
import withToggle from './HOC/withToggle';

const MyToggle = withToggle(({ isToggled, toggle }) =>
  <button onClick={toggle}>{isToggled ? 'on' : 'off'}</button>
);

export default MyToggle;
