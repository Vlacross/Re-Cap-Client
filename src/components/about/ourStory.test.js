import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';

import OurStoryConnected, { OurStory } from './ourStory';

const bio = () => ({ bio: {bio: mockBio} });

let mockStore = configureMockStore();
let store = mockStore(bio);

let mockBio = {
	who: 'who',
	what: 'what',
	when: 'when',
	where: 'where',
	whoNow: 'whoNow'
}

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

		const wrapper = shallow(<OurStory bio={mockBio} />)
		expect(wrapper.children.length).toBe(1)
		expect(wrapper.find('.bioText').length).toBe(Object.keys(mockBio).length)
	});

	it('renders content from connected state', () => {

		const wrapper = mount(
			<Provider store={store}>
				<OurStoryConnected />
			</Provider>
		)

		expect(wrapper.props('store').store.getState()).toEqual(bio())
		expect(wrapper.find('.who').text().includes(bio().bio.bio.who)).toBeTruthy()
		expect(wrapper.find('.what').text().includes(bio().bio.bio.what)).toBeTruthy()
		expect(wrapper.find('.when').text().includes(bio().bio.bio.when)).toBeTruthy()
		expect(wrapper.find('.where').text().includes(bio().bio.bio.where)).toBeTruthy()
		expect(wrapper.find('.whoNow').text().includes(bio().bio.bio.whoNow)).toBeTruthy()

	});
	

});

