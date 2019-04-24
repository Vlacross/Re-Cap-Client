import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import HeaderNav from './navBar';

it('renders without crashing', () => {
	
	const wrapper = shallow(<HeaderNav />)
	// console.log(wrapper)
expect(wrapper).toBeDefined()
});
