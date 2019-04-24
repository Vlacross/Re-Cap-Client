import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import DanceStyle from './danceStyle';

it('renders without crashing', () => {
	
	const wrapper = shallow(<DanceStyle />)
	// console.log(wrapper)
expect(wrapper).toBeDefined()
});
