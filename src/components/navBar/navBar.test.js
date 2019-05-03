import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ConnectedHeaderNav,  {HeaderNav } from './navBar';

const auth = () => ({auth: {user: 'Defined'}, views: { isMobile: true } });
const antiAuth = () => ({auth: {user: null}, views: { isMobile: true } });

let mockStore = configureMockStore();
let storeWithTrue = mockStore(auth);
let storeWithFalse = mockStore(antiAuth);

let expectedPaths = {
	'Our Story': '/ourStory',
	'Dance Styles': '/offeredTypes',
	'Sign In': '/login',
	'Enroll': '/enroll',
	'Home': '/dashboard',
	'logOut': null
};

function checkPaths(arr) {
	let result = []
	let setPaths = arr.reduce(function(acc, obj) {
			acc[obj.props.name] = obj.props.path
			return acc
			}, {})

		for(let k in setPaths) {
			result.push(setPaths[k] === expectedPaths[k])
		}

		return result.includes(false) ?
		false :
		true

};

function checkLinksNotLoggedIn(wrapper) {
		this.activeLinks = wrapper.find('.Navbar').props().children.filter(link => link !== undefined);
		this.whichActiveLinks = this.activeLinks.map(link => (link.props.name));
		this.expectedLinks = ['Our Story', 'Dance Styles', 'Sign In', 'Enroll'];
};

function checkLinksLoggedIn(wrapper) {
	this.activeLinks = wrapper.find('.Navbar').props().children.filter(link => link !== undefined);
	this.whichActiveLinks = this.activeLinks.map(link => (link.props.name));
	this.expectedLinks = ['Home', 'Our Story', 'Dance Styles', 'LogOut'];
};


describe('HeaderNav component without state', () => {


	it('renders something without crashing', () => {
		
		const wrapper = shallow(<HeaderNav loggedIn={true}/>)

		expect(wrapper).toBeDefined()
	});

	it('renders only certain navLinks based on auth state', () => { 

		const wrapper = mount(
			<MemoryRouter>
				<HeaderNav loggedIn={true} />
			</MemoryRouter>
		)
		
		let links = new checkLinksLoggedIn(wrapper)

		expect(wrapper).toBeDefined()
		expect(links.activeLinks.length).toEqual(4)
		expect(links.whichActiveLinks.filter(link => links.expectedLinks.includes(link)).length).toEqual(links.expectedLinks.length)
		expect(checkPaths(links.activeLinks)).toBeTruthy()

	});

	it('renders only certain navLinks based on auth state', () => { 

		const wrapper = mount(
			<MemoryRouter>
				<HeaderNav loggedIn={false} />
			</MemoryRouter>
		)

		let links = new checkLinksNotLoggedIn(wrapper)

		expect(wrapper).toBeDefined()
		expect(links.activeLinks.length).toEqual(4)
		expect(links.whichActiveLinks.filter(link => links.expectedLinks.includes(link)).length).toEqual(links.expectedLinks.length)
		expect(checkPaths(links.activeLinks)).toBeTruthy()

	});


})







describe('HeaderNav when connected to state', () => {

	it('renders something without crashing', () => {
		
		const wrapper = mount(
			<Provider store={storeWithFalse}>
				<MemoryRouter>
					<ConnectedHeaderNav />
				</MemoryRouter>
			</Provider>
		)
		expect(wrapper).toBeDefined()
	});

	it('renders only certain navLinks based on auth state', () => { 
	
		const wrapper = mount(
			<Provider store={storeWithFalse}>
				<MemoryRouter>
					<ConnectedHeaderNav />
				</MemoryRouter>
			</Provider>
		)

		let links = new checkLinksNotLoggedIn(wrapper)		

		expect(wrapper).toBeDefined()
		expect(links.activeLinks.length).toEqual(4)
		expect(links.whichActiveLinks.filter(link => links.expectedLinks.includes(link)).length).toEqual(links.expectedLinks.length)
		expect(checkPaths(links.activeLinks)).toBeTruthy()

	});

	it('renders only certain navLinks based on auth state', () => { 

		const wrapper = mount(
			<Provider store={storeWithTrue}>
				<MemoryRouter>
					<ConnectedHeaderNav />
				</MemoryRouter>
			</Provider>
		)

		let links = new checkLinksLoggedIn(wrapper)

		expect(wrapper).toBeDefined()
		expect(links.activeLinks.length).toEqual(4)
		expect(links.whichActiveLinks.filter(link => links.expectedLinks.includes(link)).length).toEqual(links.expectedLinks.length)
		expect(checkPaths(links.activeLinks)).toBeTruthy()
	});

});

