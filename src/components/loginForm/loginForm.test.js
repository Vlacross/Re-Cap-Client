import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import LoginForm from './loginForm';

it('renders without crashing', () => {
	
	const wrapper = shallow(<LoginForm />)
	// console.log(wrapper)
expect(wrapper).toBeDefined()
});
