import React from 'react';
import { shallow } from 'enzyme';
import OfferedTypes from './courses';
import { Provider } from 'react-redux';
import { mockCourseStore } from '../../testUtils'

let store = mockCourseStore;

it('renders without crashing', () => {
	
	const wrapper = shallow(
		<Provider store={store}>
			<OfferedTypes />
		</Provider>
	)
expect(wrapper).toBeDefined()
});
