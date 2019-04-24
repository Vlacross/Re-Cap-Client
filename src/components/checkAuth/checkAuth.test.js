import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import CheckAuth from './checkAuth';

let store;





it('renders based on state', () => {
	const props = {
		loggedIn: false,
		loading: false,
		error: false
	}
	
	const Component = () => <h1>Tester</h1>
	const Hoc = CheckAuth()(Component)
	const wrapper = shallow(<Hoc props={props} />)
	// console.log('whipwhap', wrapper.render())
	expect(wrapper).toBeDefined()
});



// describe('AuthCheck conditional component wrapper', () => {
// 	beforeEach(() => {
// 		const mockStore = configureStore();

// 		store = mockStore({
// 			auth: {
// 				loggedIn: false,
// 				loading: true,
// 				error: false
// 			}
// 		})
// 	})

		

// it('renders based on state', () => {

// 	const Component = () => <h1>Tester</h1>
// 	const Hoc = CheckAuth(Component)

//  const wrapper = shallow(<Hoc store={store} />)
//  console.log(wrapper)
//  expect(wrapper).not.toBe(undefined)
// });

// })


