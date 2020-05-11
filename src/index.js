import React from 'react';
import ReactDOM from 'react-dom';
import{Provider} from 'react-redux';
import TemplateContainer from './components/TemplateContainer';
import Store from './store';

ReactDOM.render(

    <Provider store={Store}>
        <TemplateContainer />
    </Provider>,
    document.getElementById('root')
);