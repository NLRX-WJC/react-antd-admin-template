// import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk'
import reducer from './reducers'


const preloadedState = {};

const store = configureStore({
  reducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => {
    // WARNING: this means that _none_ of the default middleware are added!
    return [thunk]
    // or for TS users, use:
    // return new Tuple(myMiddleware)
  },
})

export default store