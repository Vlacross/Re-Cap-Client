import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import SingleCourse from './singleCourse';

it('renders without crashing', () => {
	
	const wrapper = shallow(<SingleCourse />)
	// console.log(wrapper)
expect(wrapper).toBeDefined()
});
