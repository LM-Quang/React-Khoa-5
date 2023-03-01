import { connection } from "../../index.js";
import { quanLyDatVeService } from "../../Services/QuanLyDatVeService.js";
import { API_STATUS } from "../../Util/Settings/config.js";
import { CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "../Type/QuanLyDatVeType.js";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction.js";

export const layDanhSachPhongVeAction = (maLichChieu) => {
   return async (dispatch) => {
      try {
         const result = await quanLyDatVeService.layDanhSachPhongVe(maLichChieu);
         if (result.status === API_STATUS.SUCCESS) {
            dispatch({
               type: SET_CHI_TIET_PHONG_VE,
               chiTietPhongVe: result.data.content,
            });
         }
      } catch (error) {
         console.log("error", error);
      }
   };
};

export const datVeAction = (thongTinDatVe) => {
   return async (dispatch) => {
      try {
         dispatch(displayLoadingAction);
         const result = await quanLyDatVeService.datVe(thongTinDatVe);
         if (result.status === API_STATUS.SUCCESS) {
            // Đặt vé thành công thì gọi api load lại phòng vé
            await dispatch(layDanhSachPhongVeAction(thongTinDatVe.maLichChieu));
            // Gọi Reducer QuanLyDatVe cập nhật lại thông tin đặt vé
            await dispatch({ type: DAT_VE_HOAN_TAT });
            await dispatch(hideLoadingAction);
            dispatch({ type: CHUYEN_TAB });
         }
      } catch (error) {
         dispatch(hideLoadingAction);
         console.log(error.response.data);
      }
   };
};

export const datGheAction = (ghe, maLichChieu) => {
   return async (dispatch, getState) => {
      //Đưa thông tin ghế lên reducer
      await dispatch({
         type: DAT_VE,
         gheDuocChon: ghe,
      });
      //Call api về backend
      let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat;
      let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;
      //Biến mảng thành chuỗi
      danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);
      //Call api signalR
      connection.invoke("datGhe", taiKhoan, danhSachGheDangDat, maLichChieu);
   };
};
