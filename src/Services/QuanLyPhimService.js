import { BaseService } from "./BaseService.js";

export class QuanLyPhimService extends BaseService {
   layDanhSachBanner = () => {
      return this.get("/QuanLyPhim/LayDanhSachBanner");
   };
}
export const quanLyPhimService = new QuanLyPhimService();
