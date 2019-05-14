import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';

import OurStoryConnected, { OurStory } from './ourStory';

const bio = () => ({ bio: {bio: 'connected bibliography'} });

let mockStore = configureMockStore();
let store = mockStore(bio);

describe('OurStory function', () => {

	it('connected component renders without crashing', () => {
		
		shallow(<OurStoryConnected />)
	});

	it('component on its own renders without crashing', () => {
		
		shallow(<OurStory />)
		
	});

	it('renders something', () => {
		const wrapper = shallow(<OurStoryConnected />)
		expect(wrapper).toBeDefined()
	});

	it('renders something', () => {
		const wrapper = shallow(<OurStory />)
		expect(wrapper).toBeDefined()
	});
	
	it('renders content based on passed props', () => {

		const wrapper = shallow(<OurStory bio="bibliography"/>)
		expect(wrapper.children.length).toBe(1)
		expect(wrapper.find('.bioText').length).toBe(1)
	});

	it('renders content from connected state', () => {

		const wrapper = mount(
			<Provider store={store}>
				<OurStoryConnected />
			</Provider>
		)
		expect(wrapper.props('store').store.getState()).toEqual(bio())
		expect(wrapper.find('.bioText').text().includes(bio().bio.bio)).toBeTruthy()

	});
	

});

