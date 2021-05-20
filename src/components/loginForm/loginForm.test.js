import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import LoginForm from './loginForm';
import configureMockStore from 'redux-mock-store';

const authStore = () => ({
													token: null,
													user: null,
													loading: false,
													error: null,
													protectedAccount: null
												});

let mockStore = configureMockStore();
let store = mockStore(authStore);

it('renders without crashing', () => {
	
	const wrapper = shallow(
		<Provider store={store}>
			<LoginForm />
		</Provider>
	)
	// console.log(wrapper)
expect(wrapper).toBeDefined()
});
