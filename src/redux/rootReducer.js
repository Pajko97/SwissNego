import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../history'
import controllerReducer from './reducers/controlReducer'
const rootReducer = (history) => combineReducers({
    controller: controllerReducer,
    router: connectRouter(history)
})

export default rootReducer
