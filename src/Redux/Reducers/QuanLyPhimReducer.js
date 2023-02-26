import { SET_DANH_SACH_PHIM, SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../Type/QuanLyPhimType.js";

const initialState = {
   arrPhim: [],
   arrPhimDefault: [],
   dangChieu: true,
   sapChieu: true,
};

export const QuanLyPhimReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_DANH_SACH_PHIM: {
         return { ...state, arrPhim: action.arrPhim, arrPhimDefault: action.arrPhim };
      }
      case SET_PHIM_DANG_CHIEU: {
         state.dangChieu = !state.dangChieu;
         state.arrPhim = state.arrPhimDefault.filter((film) => film.dangChieu === state.dangChieu);
         return { ...state };
      }
      case SET_PHIM_SAP_CHIEU: {
         state.sapChieu = !state.sapChieu;
         state.arrPhim = state.arrPhimDefault.filter((film) => film.sapChieu === state.sapChieu);
         return { ...state };
      }
      default:
         return state;
   }
};
