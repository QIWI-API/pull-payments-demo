import React from 'react';
import {render} from 'react-dom';

import App from './App';

import './scss/styles.scss';

render(
    <App/>,
  document.getElementById('root')
);

if(__DEV__  && module.hot) {
    module.hot.accept('./App', () => {
        const NewApp = require('./App').default;
        render(<NewApp />, document.getElementById('root'));
    });
}