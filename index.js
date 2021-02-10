import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { UseContextProvider } from './context';
import { Provider } from 'react-redux';
import store from "./store";
import App from './App';

ReactDOM.render(
    <UseContextProvider>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </UseContextProvider>, document.getElementById("root"));
