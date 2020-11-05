import { dispatch, createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './rootReducer';
/* Try */
import { routerMiddleware } from 'connected-react-router';
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import history from '../history'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancers = composeEnhancers(
    applyMiddleware(
        thunk,
        logger,
        routerMiddleware(history),

    ),

);
const defaultState = {}
const store = createStore(
    rootReducer(history),
    defaultState,
    enhancers);


export default store

