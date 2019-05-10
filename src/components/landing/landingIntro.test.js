import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import LandingIntro from './landingIntro';

let expectedPaths = {
	'Sign In': '/login',
	'Enroll': '/enroll'
}

let checkPaths = (wrapper) => {

	let result = []
	let links = wrapper.find('.landingIntro').props().children.filter(el => (el.type === 'label'));
	let linkPaths = links.map(link => (links[0].props.children.props))
	for(let k in linkPaths) {
		result.push(linkPaths[k] === expectedPaths[k])
	}
	console.log(result)
	return result.includes('false')
};



describe('landingPage Component', () => {
	
	
	it('renders without crashing', () => {
		shallow(<LandingIntro />)
	
	});
	
	it('renders something', () => {
		const wrapper = shallow(<LandingIntro />)
	
		expect(wrapper).toBeDefined()
	
	});
	
	it('renders expected content', () => { 
	
		const wrapper = shallow(<LandingIntro />)
	
		expect(wrapper.props().children.length).toBe(5)
		expect(wrapper.find('.landingIntro').length).toBe(1)
		expect(wrapper.find('.introLink').length).toBe(2)
	
	});
	
	it('renders Links without crashing', () => { 
	
		const wrapper = mount(	
			<MemoryRouter>
				<LandingIntro />
			</MemoryRouter>
		)

			// console.log(wrapper.debug())
			// let links = wrapper.find('.landingIntro').props().children.filter(el => (el.type === 'label'))

			// console.log(links.map(link => (links[0].props.children.props)))
	
		expect(wrapper).toBeDefined()
		// expect(checkPaths(wrapper)).toBeTruthy()
	
	});

});
