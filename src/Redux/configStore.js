import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { TestReducer } from "./Reducers/TestReducer.js";
const rootReducer = combineReducers({
   TestReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
