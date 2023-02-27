import { quanLyNguoiDungService } from "../../Services/QuanLyNguoiDungService.js";
import { API_STATUS } from "../../Util/Settings/config.js";
import { DANG_NHAP_ACTION } from "../Type/QuanLyNguoiDungType.js";

export const dangNhapAction = (thongTinDangNhap) => {
   return async (dispatch) => {
      try {
         const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
         if (result.status === API_STATUS.SUCCESS) {
            dispatch({
               type: DANG_NHAP_ACTION,
               thongTinDangNhap: result.data.content,
            });
         }
      } catch (error) {
         console.log("error", error);
      }
   };
};
