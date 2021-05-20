import React from 'react';
import EnrollForm from './enrollForm';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { mockStateStore } from '../../testUtils'


it('renders without crashing', () => {
  const wrapper = shallow(
    <Provider store={mockStateStore}>
      <EnrollForm />
    </Provider>
  )
  expect(wrapper).toBeDefined()
});

