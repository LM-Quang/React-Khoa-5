import { TOKEN, USER_LOGIN } from "../../Util/Settings/config.js";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../Type/QuanLyNguoiDungType.js";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
   user = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const initialState = {
   userLogin: user,
   thongTinNguoiDung: {
      email: "",
      hoTen: "",
      loaiNguoiDung: "",
      maNhom: "",
      matKhau: "",
      soDT: "",
      taiKhoan: "",
      thongTinDatVe: [],
   },
};

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
   switch (action.type) {
      case DANG_NHAP_ACTION: {
         localStorage.setItem(USER_LOGIN, JSON.stringify(action.thongTinDangNhap));
         localStorage.setItem(TOKEN, action.thongTinDangNhap.accessToken);
         return { ...state, userLogin: action.thongTinDangNhap };
      }
      case SET_THONG_TIN_NGUOI_DUNG: {
         state.thongTinNguoiDung = action.thongTinNguoiDung;
         return { ...state };
      }
      default:
         return state;
   }
};
