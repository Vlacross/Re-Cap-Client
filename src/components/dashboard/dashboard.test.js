import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard';


const defaultProps = {
  meta: {
    touched: null,
    error: null,
	},
	input: {
		name: 'inputName',
		type: 'text'
	}
}

it('renders without crashing', () => {
	
	const wrapper = shallow(<Dashboard {...defaultProps} />)
	// console.log(wrapper)
expect(wrapper).toBeDefined()
});


