import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
import reducers from "../reducers";

const config = {
  key: "root",
  storage
};

const perReducers = persistCombineReducers(config, reducers);
const store = createStore(perReducers, {}, compose(applyMiddleware(thunk)));
export let persistor = persistStore(store);

export default store;
