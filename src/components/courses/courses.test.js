import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import OfferedTypes from './courses';

it('renders without crashing', () => {
	
	const wrapper = shallow(<OfferedTypes />)
expect(wrapper).toBeDefined()
});
