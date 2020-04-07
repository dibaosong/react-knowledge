import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import user from './reducer/user';

import dictionary from './reducer/dictionary';

let rootReducer = combineReducers({
    user,
    dictionary
})


let finalCreateStore = compose(applyMiddleware(thunk))(createStore)
let store = finalCreateStore(rootReducer, {})

export default store;