import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import NavBarLink from './navBarLink';

const mock = {
			name: "mockName",
			path: "/mockRoute"
};


describe('navBarLinks', () => {



it('renders something', () => { 

	const wrapper = mount(	
		<MemoryRouter>
			<NavBarLink path={mock.path} name={mock.name}/>
		</MemoryRouter>
	)
	expect(wrapper).toBeDefined()

});

it('renders without crashing', () => {
	
	let entries = ["/mockRoute", "/"]
	let entryIndex = 1

	const wrapper = mount(	

		<MemoryRouter
		initialEntries={entries} 
		initialIndex={entryIndex}>
			<NavBarLink path={mock.path} name={mock.name}/>
		</MemoryRouter>
	)
	expect(wrapper).toBeDefined()
	expect(wrapper.children().props().children.props.path).toEqual(mock.path)
	expect(wrapper.children().props().children.props.name).toEqual(mock.name)
	expect(wrapper.children().props().history.location.pathname).toEqual(entries[entryIndex])

});

	});
		