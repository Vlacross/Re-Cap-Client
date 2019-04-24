import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import LandingIntro from './landingIntro';

it('renders without crashing', () => {
	
	const wrapper = shallow(<LandingIntro />)
	// console.log(wrapper)
expect(wrapper).toBeDefined()
});
