import { combineReducers } from 'redux'
import colorReducer from './colorReducer'
import requestReducer from './requestReducer'

export default combineReducers({
    color: colorReducer,
    request: requestReducer
})