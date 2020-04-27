import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(reduxThunk));

export default store