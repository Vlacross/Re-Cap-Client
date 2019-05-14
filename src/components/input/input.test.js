import React from 'react';
import { shallow } from 'enzyme';
import Input from './input';


const defaultProps = {
  meta: {
    touched: null,
    error: null,
	},
	input: {
		name: 'inputName',
		type: 'text'
	}
};

it('renders without crashing', () => {
	
	const wrapper = shallow(<Input {...defaultProps} />)
	// console.log(wrapper)
expect(wrapper).toBeDefined()
});
