import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Input from './input';

it('renders without crashing', () => {
	
	const wrapper = shallow(<Input />)
	// console.log(wrapper)
expect(wrapper).toBeDefined()
});
