import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import routeToDashboard from './dashboardRedirect';

let store;





it('renders based on state', () => {
	const props = {
		loggedIn: false,
		loading: false,
		error: false
	}
	
	const Component = () => <h1>Tester</h1>
	const Hoc = routeToDashboard()(Component)
	const wrapper = shallow(<Hoc loading={true} />)
	// console.log('whipwhap', wrapper)
	expect(wrapper).toBeDefined()
});