import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import EnrollForm from './enrollForm';

it('renders without crashing', () => {
	
	const wrapper = shallow(<EnrollForm />)
	// console.log(wrapper)
expect(wrapper).toBeDefined()
});
