import { quanLyRapService } from "../../Services/QuanLyRapService.js";
import { API_STATUS } from "../../Util/Settings/config.js";
import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from "../Type/QuanLyRapType.js";

export const layThongTinLichChieuHeThongRapAction = () => {
   return async (dispatch) => {
      try {
         const result = await quanLyRapService.layThongTinLichChieuHeThongRap();
         if (result.status === API_STATUS.SUCCESS) {
            dispatch({ type: SET_HE_THONG_RAP_CHIEU, heThongRapChieu: result.data.content });
         }
      } catch (error) {
         console.log("error", error);
      }
   };
};

export const layThongTinLichChieuPhimAction = (id) => {
   return async (dispatch) => {
      try {
         const result = await quanLyRapService.layThongTinLichChieuPhim(id);
         if (result.status === API_STATUS.SUCCESS) {
            dispatch({ type: SET_CHI_TIET_PHIM, filmDetail: result.data.content });
         }
      } catch (error) {
         console.log("error", error);
      }
   };
};
