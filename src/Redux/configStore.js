import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./Reducers/CarouselReducer.js";
import { QuanLyPhimReducer } from "./Reducers/QuanLyPhimReducer.js";
import { QuanLyRapReducer } from "./Reducers/QuanLyRapReducer.js";
import { QuanLyNguoiDungReducer } from "./Reducers/QuanLyNguoiDungReducer.js";
const rootReducer = combineReducers({
   CarouselReducer,
   QuanLyPhimReducer,
   QuanLyRapReducer,
   QuanLyNguoiDungReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
