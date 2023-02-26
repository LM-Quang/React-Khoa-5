import { BaseService } from "./BaseService.js";
import { GROUP_ID } from "../Util/Settings/config.js";
class QuanLyRapService extends BaseService {
   layThongTinHeThongRap = () => {};
   layThongTinCumRapTheoHeThong = () => {};
   layThongTinLichChieuHeThongRap = () => {
      return this.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
   };
   layThongTinLichChieuPhim = () => {};
}

export const quanLyRapService = new QuanLyRapService();
