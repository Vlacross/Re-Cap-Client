import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './dashboard';
import { Provider } from 'react-redux';
import { mockStateStore } from '../../testUtils'



it('renders without crashing', () => {
	
	const wrapper = shallow(
		<Provider store={mockStateStore}>
			<Dashboard />
		</Provider>
	)
	// console.log(wrapper)
expect(wrapper).toBeDefined()
});


