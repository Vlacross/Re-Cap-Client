import React from 'react';
import { shallow } from 'enzyme';
import SingleCourse from './singleCourse';
import { Provider } from 'react-redux';
import { mockStateStore } from '../../testUtils'




it('renders without crashing', () => {
	
	const wrapper = shallow(
		<Provider store={mockStateStore}>
			<SingleCourse />
		</Provider>
	)
expect(wrapper).toBeDefined()
});
