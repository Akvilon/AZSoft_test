import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/App';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { mainTheme } from './styles';
import {ThemeProvider} from 'react-jss';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './store';

export const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </ThemeProvider>
    </Provider>

    , document.getElementById('root'));


