import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store from './store';



ReactDOM.render(

    <Provider store={Store}>
        <Router>
            <App />
        </Router>
     </Provider> 
    ,
    document.getElementById('root')
    );

    
serviceWorker.unregister();
