import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import OurStory from './ourStory';

it('renders without crashing', () => {
	
	const wrapper = shallow(<OurStory />)
expect(wrapper).toBeDefined()
});
