import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./Reducers/CarouselReducer.js";
import { QuanLyPhimReducer } from "./Reducers/QuanLyPhimReducer.js";
const rootReducer = combineReducers({
   CarouselReducer,
   QuanLyPhimReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
