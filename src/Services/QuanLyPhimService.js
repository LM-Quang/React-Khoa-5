import { BaseService } from "./BaseService.js";
import { GROUP_ID } from "../Util/Settings/config.js";
export class QuanLyPhimService extends BaseService {
   layDanhSachBanner = () => {
      return this.get("/QuanLyPhim/LayDanhSachBanner");
   };
   layDanhSachPhim = () => {
      return this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
   };
}
export const quanLyPhimService = new QuanLyPhimService();
