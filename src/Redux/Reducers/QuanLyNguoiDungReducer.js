import { TOKEN, USER_LOGIN } from "../../Util/Settings/config.js";
import { DANG_NHAP_ACTION } from "../Type/QuanLyNguoiDungType.js";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
   user = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const initialState = {
   userLogin: user,
};

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
   switch (action.type) {
      case DANG_NHAP_ACTION: {
         localStorage.setItem(USER_LOGIN, JSON.stringify(action.thongTinDangNhap));
         localStorage.setItem(TOKEN, action.thongTinDangNhap.accessToken);
         return { ...state, userLogin: action.thongTinDangNhap };
      }
      default:
         return state;
   }
};