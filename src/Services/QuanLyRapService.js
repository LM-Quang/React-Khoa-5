import { BaseService } from "./BaseService.js";
import { GROUP_ID } from "../Util/Settings/config.js";
class QuanLyRapService extends BaseService {
   // layThongTinHeThongRap = () => {};
   // layThongTinCumRapTheoHeThong = () => {};
   layThongTinLichChieuHeThongRap = () => {
      return this.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
   };
   layThongTinLichChieuPhim = (id) => {
      return this.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
   };
}

export const quanLyRapService = new QuanLyRapService();
