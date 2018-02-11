import React from 'react';
import withToggle from './HOC/withToggle';

const MyToggle = ({ toggle: { isToggled, toggle } }) => (
  <button onClick={toggle}>{isToggled ? 'on' : 'off'}</button>
);

const MyToggleWrapper = withToggle(MyToggle);

export default MyToggleWrapper;
