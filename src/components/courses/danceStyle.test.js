import React from 'react';
import { shallow } from 'enzyme';
import DanceStyle from './danceStyle';
import { Provider } from 'react-redux';
import { mockStateStore } from '../../testUtils'




it('renders without crashing', () => {
	
	const wrapper = shallow(
		<Provider store={mockStateStore}>
			<DanceStyle />
		</Provider>
	)
	// console.log(wrapper)
expect(wrapper).toBeDefined()
});
