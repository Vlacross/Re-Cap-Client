import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import OurStoryConnected, { OurStory } from './ourStory';
import { mockStaticStore } from '../../testUtils'

let store = mockStaticStore
let bio = store.getState().bio

describe('OurStory function', () => {

	it('connected component renders without crashing', () => {
		
		shallow(
			<Provider store={store}>
				<OurStoryConnected />
			</Provider>
		)
	});

	it('component on its own renders without crashing', () => {
		
		shallow(<OurStory />)
		
	});

	it('renders something', () => {
		const wrapper = shallow(
			<Provider store={store}>
				<OurStoryConnected />
			</Provider>
		)
		expect(wrapper).toBeDefined()
	});

	// it('renders something', () => {
	// 	const wrapper = shallow(<OurStory />)
	// 	expect(wrapper).toBeDefined()
	// });
	
	it('renders content based on passed props', () => {

		const wrapper = shallow(<OurStory bio={bio} />)
		expect(wrapper.children.length).toBe(1)
		expect(wrapper.find('.bioText').length).toBe(Object.keys(bio.bio).length)
	});
	
	it('renders content from connected state', () => {
		
		const wrapper = mount(
			<Provider store={store}>
				<OurStoryConnected />
			</Provider>
		)
		// console.log('LOGGING', wrapper.debug())

		expect(wrapper.props('store').store.getState()).toEqual(store.getState())
		expect(wrapper.find('.who').text().includes(bio.bio.who)).toBeTruthy()
		expect(wrapper.find('.what').text().includes(bio.bio.what)).toBeTruthy()
		expect(wrapper.find('.when').text().includes(bio.bio.when)).toBeTruthy()
		expect(wrapper.find('.where').text().includes(bio.bio.where)).toBeTruthy()
		expect(wrapper.find('.whoNow').text().includes(bio.bio.whoNow)).toBeTruthy()

	});
	

});

