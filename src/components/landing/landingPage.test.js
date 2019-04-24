import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import LandingPage from './landingPage';

it('renders without crashing', () => {
	
	const wrapper = shallow(<LandingPage />)
	// console.log(wrapper)
expect(wrapper).toBeDefined()
});
