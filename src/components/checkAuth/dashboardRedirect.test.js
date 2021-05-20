import React from 'react';
import { shallow, mount } from 'enzyme';
import routeToDashboard from './dashboardRedirect';
import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';
import { mockAuthStore } from '../../testUtils';


// const authStore = () => ({
// 	token: null,
// 	user: null,
// 	loading: false,
// 	error: null,
// 	protectedAccount: null
// });

// let mockStore = configureMockStore();
// let store = mockStore(authStore);

it('renders based on state', () => {
	
	const Component = () => <h1>Tester</h1>
	const Hoc = routeToDashboard()(Component)
	const wrapper = shallow(
		<Provider store={mockAuthStore}>
			<Hoc loading={true} />
		</Provider>
	)
	// console.log('whipwhap', wrapper)
	expect(wrapper).toBeDefined()
});