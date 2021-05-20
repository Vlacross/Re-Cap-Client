import React from 'react';
import { shallow, mount } from 'enzyme';
import CheckAuth from './checkAuth';
import { Provider } from 'react-redux';
import { mockStateStore } from '../../testUtils'




it('renders based on state', () => {
	const props = {
		loggedIn: false,
		loading: false,
		error: false
	}
	
	const Component = () => (<h1>Tester</h1>)
	const Hoc = (CheckAuth()(Component))
	const wrapper = shallow(
		<Provider store={mockStateStore}>
			<Hoc props={props}/>
		</Provider>
	)
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


