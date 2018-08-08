import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/components/App';
import registerServiceWorker from './registerServiceWorker';
import Provider from "react-redux/es/components/Provider";
import store from "./js/store";

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
