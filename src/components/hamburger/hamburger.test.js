import React from 'react';
import { shallow } from 'enzyme';
import Hamburger from './hamburger';

it('renders without crashing', () => {
  const wrapper = shallow(<Hamburger />)
  expect(wrapper).toBeDefined()
});
