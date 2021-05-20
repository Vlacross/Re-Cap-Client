import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { mockStateStore } from '../testUtils'


it('renders without crashing', () => {
  const wrapper = shallow(
    <Provider store={mockStateStore}>
      <App />
    </Provider>
  )
  expect(wrapper).toBeDefined()
});
