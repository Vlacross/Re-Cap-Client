import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import ConnectedLandingPage, { LandingPage } from './landingPage';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const auth = () => ({auth: {user: 'Defined'}});
const antiAuth = () => ({auth: {user: null}});

let mockStore = configureMockStore();
let storeWithTrue = mockStore(auth);
let storeWithFalse = mockStore(antiAuth);

describe('landingPage Component unwrapped', () => {

	it('renders without crashing', () => {
		shallow(<LandingPage />)

	});

	it('renders something', () => {
		const wrapper = mount(	
			<MemoryRouter>
				<LandingPage />
			</MemoryRouter>
		)

		expect(wrapper).toBeDefined()
		
	});



});

describe('landingPage Component wrapped in dashBoardRedirect', () => {


	it('renders something without crashing', () => {
		
		const wrapper = mount(
			<Provider store={storeWithFalse}>
				<MemoryRouter>
					<ConnectedLandingPage />
				</MemoryRouter>
			</Provider>
		)

		console.log(wrapper.find('.landingPage').length)

		expect(wrapper).toBeDefined()
		expect(wrapper.find('.landingPage')).toHaveLength(1)
		expect(wrapper.find('LandingIntro')).toHaveLength(1)
	});



});

