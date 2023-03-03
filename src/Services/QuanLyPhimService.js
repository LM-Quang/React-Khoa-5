import { BaseService } from "./BaseService.js";
import { GROUP_ID } from "../Util/Settings/config.js";
export class QuanLyPhimService extends BaseService {
   layDanhSachBanner = () => {
      return this.get("/QuanLyPhim/LayDanhSachBanner");
   };
   layDanhSachPhim = (tenPhim = "") => {
      if (tenPhim.trim() !== "") {
         return this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${tenPhim}`);
      }
      return this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
   };
   layThongTinPhim = (maPhim) => {
      return this.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
   };
   themPhimUploadHinh = (formData) => {
      return this.post(`QuanLyPhim/ThemPhimUploadHinh`, formData);
   };
   capNhatPhimUpload = (formData) => {
      return this.post(`QuanLyPhim/CapNhatPhimUpload`, formData);
   };
   xoaPhim = (maPhim) => {
      return this.delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
   };
}
export const quanLyPhimService = new QuanLyPhimService();
