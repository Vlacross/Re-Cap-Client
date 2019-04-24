import React from 'react';
import EnrollForm from './enrollForm';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  const wrapper = shallow(<EnrollForm />)
  expect(wrapper).toBeDefined()
});

