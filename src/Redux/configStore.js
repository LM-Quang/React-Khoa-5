import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./Reducers/CarouselReducer.js";

const rootReducer = combineReducers({
   CarouselReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
