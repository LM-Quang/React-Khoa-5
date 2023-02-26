import { quanLyPhimService } from "../../Services/QuanLyPhimService.js";
import { SET_DANH_SACH_PHIM } from "../Type/QuanLyPhimType.js";

export const layDanhSachPhimAction = () => {
   return async (dispatch) => {
      try {
         const result = await quanLyPhimService.layDanhSachPhim();
         dispatch({
            type: SET_DANH_SACH_PHIM,
            arrPhim: result.data.content,
         });
      } catch (error) {
         console.log("error", error);
      }
   };
};
