import { history } from "../../App.js";
import { quanLyPhimService } from "../../Services/QuanLyPhimService.js";
import { API_STATUS } from "../../Util/Settings/config.js";
import {
   SET_DANH_SACH_PHIM,
   SET_THONG_TIN_PHIM,
} from "../Type/QuanLyPhimType.js";

export const layDanhSachPhimAction = (tenPhim = "") => {
   return async (dispatch) => {
      try {
         const result = await quanLyPhimService.layDanhSachPhim(tenPhim);
         dispatch({
            type: SET_DANH_SACH_PHIM,
            arrPhim: result.data.content,
         });
      } catch (error) {
         console.log("error", error);
      }
   };
};

export const themPhimUploadHinhAction = (formData) => {
   return async (dispatch) => {
      try {
         const result = await quanLyPhimService.themPhimUploadHinh(formData);
         if (result.status === API_STATUS.SUCCESS) {
            alert("Thêm phim thành công!");
         }
      } catch (errors) {
         console.log(errors.response?.data);
      }
   };
};

export const capNhatPhimUploadAction = (formData) => {
   return async (dispatch) => {
      try {
         const result = await quanLyPhimService.capNhatPhimUpload(formData);
         if (result.status === API_STATUS.SUCCESS) {
            alert("Cập nhật phim thành công!");
            dispatch(layDanhSachPhimAction());
            history.push("/admin/films");
         }
      } catch (errors) {
         console.log(errors.response?.data);
      }
   };
};

export const layThongTinPhimAction = (maPhim) => {
   return async (dispatch) => {
      try {
         const result = await quanLyPhimService.layThongTinPhim(maPhim);
         dispatch({
            type: SET_THONG_TIN_PHIM,
            thongTinPhim: result.data.content,
         });
      } catch (errors) {
         console.log("errors", errors);
      }
   };
};

export const xoaPhimAction = (maPhim) => {
   return async (dispatch) => {
      try {
         //Sử dụng tham số thamSo
         const result = await quanLyPhimService.xoaPhim(maPhim);
         if (result.status === API_STATUS.SUCCESS) {
            alert("Xoá phim thành công !");
            //Sau khi xoá load lại danh sách phim mới;
            dispatch(layDanhSachPhimAction());
         }
      } catch (errors) {
         console.log("errors", errors.response?.data);
      }
   };
};
