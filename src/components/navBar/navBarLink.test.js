import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import navBarLink from './navBarLink';

it('renders without crashing', () => {
	
	const wrapper = shallow(<navBarLink />)
	// console.log(wrapper)
expect(wrapper).toBeDefined()
});
