import { configure, shallow } from 'enzyme';
/* 
Enzyme not yet compatible with React 17 so using unofficial Adapter
https://github.com/enzymejs/enzyme/issues/2429
// import Adapter from 'enzyme-adapter-react-16';
*/
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });




