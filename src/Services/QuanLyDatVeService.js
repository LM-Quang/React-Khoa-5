import { ThongTinDatVe } from "../_Core/Models/ThongTinDatVe.js";
import { BaseService } from "./BaseService.js";

class QuanLyDatVeService extends BaseService {
   layDanhSachPhongVe = (maLichChieu) => {
      return this.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
   };

   datVe = (thongTinDatVe = new ThongTinDatVe()) => {
      /* thongTinDatVe =  {
        "maLichChieu": 0,
        "danhSachVe": [
          {
            "maGhe": 0,
            "giaVe": 0
          }
        ]
      }*/
      return this.post(`/QuanLyDatVe/DatVe`, thongTinDatVe);
   };
}

export const quanLyDatVeService = new QuanLyDatVeService();
