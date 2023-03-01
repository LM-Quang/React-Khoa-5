import { quanLyNguoiDungService } from "../../Services/QuanLyNguoiDungService.js";
import { API_STATUS } from "../../Util/Settings/config.js";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../Type/QuanLyNguoiDungType.js";
import { history } from "../../App.js";

export const dangNhapAction = (thongTinDangNhap) => {
   return async (dispatch) => {
      try {
         const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
         if (result.status === API_STATUS.SUCCESS) {
            dispatch({
               type: DANG_NHAP_ACTION,
               thongTinDangNhap: result.data.content,
            });
            // Chuyển hướng đăng nhập về trang trước đó
            history.goBack();
         }
      } catch (error) {
         console.log("error", error);
      }
   };
};

export const layThongTinNguoiDungAction = () => {
   return async (dispatch) => {
      try {
         const result = await quanLyNguoiDungService.layThongTinNguoiDung();

         if (result.status === API_STATUS.SUCCESS) {
            dispatch({
               type: SET_THONG_TIN_NGUOI_DUNG,
               thongTinNguoiDung: result.data.content,
            });
         }
      } catch (error) {
         console.log("error", error);
      }
   };
};
