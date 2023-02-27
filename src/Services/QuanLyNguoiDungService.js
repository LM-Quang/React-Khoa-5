import { BaseService } from "./BaseService.js";

class QuanLyNguoiDungService extends BaseService {
   dangNhap = (thongTinDangNhap) => {
      // thongTinDangNhap: {
      //    taiKhoan:'',
      //    matKhau:''
      // }
      return this.post("QuanLyNguoiDung/DangNhap", thongTinDangNhap);
   };
}
export const quanLyNguoiDungService = new QuanLyNguoiDungService();
