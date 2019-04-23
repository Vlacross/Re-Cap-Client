import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

import { Provider } from 'react-redux';
import Store from '../store';


it('renders without crashing', () => {
  shallow(<App />)
});
