import { SET_HE_THONG_RAP_CHIEU } from "../Type/QuanLyRapType.js";

const initialState = {
   heThongRapChieu: [],
};

export const QuanLyRapReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_HE_THONG_RAP_CHIEU: {
         return { ...state, heThongRapChieu: action.heThongRapChieu };
      }
      default:
         return state;
   }
};
