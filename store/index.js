import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//import { persistStore, persistCombineReducers } from 'redux-persist';
//import storage from 'redux-persist/es/storage';
import reducers from '../reducers';

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

export default store;