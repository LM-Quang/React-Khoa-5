import { SET_DANH_SACH_PHIM, SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU, SET_THONG_TIN_PHIM } from "../Type/QuanLyPhimType.js";
import { SET_CHI_TIET_PHIM } from "../Type/QuanLyRapType.js";

const initialState = {
   arrPhim: [
      {
         maPhim: 0,
         tenPhim: "",
         biDanh: "",
         trailer: "",
         hinhAnh: "",
         moTa: "",
         maNhom: "",
         ngayKhoiChieu: "",
         danhGia: 0,
         hot: true,
         dangChieu: false,
         sapChieu: true,
      },
   ],
   arrPhimDefault: [],
   dangChieu: true,
   sapChieu: true,
   filmDetail: {},
   thongTinPhim: {},
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
      case SET_CHI_TIET_PHIM: {
         return { ...state, filmDetail: action.filmDetail };
      }
      case SET_THONG_TIN_PHIM: {
         state.thongTinPhim = action.thongTinPhim;
         return { ...state };
      }
      default:
         return state;
   }
};
