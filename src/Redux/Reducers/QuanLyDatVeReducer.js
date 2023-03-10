import { ThongTinLichChieu } from "../../_Core/Models/ThongTinPhongVe.js";
import { CHUYEN_TAB, CHUYEN_TAB_ACTIVE, DAT_GHE, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "../Type/QuanLyDatVeType.js";

const initialState = {
   chiTietPhongVe: new ThongTinLichChieu(),
   danhSachGheDangDat: [],
   danhSachGheKhachDat: [],
   tabActive: 1,
};

export const QuanLyDatVeReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_CHI_TIET_PHONG_VE: {
         return { ...state, chiTietPhongVe: action.chiTietPhongVe };
      }
      case DAT_VE: {
         let danhSachGheCapNhat = [...state.danhSachGheDangDat];
         let index = danhSachGheCapNhat.findIndex((gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe);
         if (index !== -1) {
            danhSachGheCapNhat.splice(index, 1);
         } else {
            danhSachGheCapNhat.push(action.gheDuocChon);
         }
         return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
      }
      case DAT_VE_HOAN_TAT: {
         return { ...state, danhSachGheDangDat: [] };
      }
      case CHUYEN_TAB: {
         return { ...state, tabActive: 2 };
      }
      case CHUYEN_TAB_ACTIVE: {
         return { ...state, tabActive: action.number };
      }
      case DAT_GHE: {
         state.danhSachGheKhachDat = action.arrGheKhachDat;
         return { ...state };
      }
      default:
         return state;
   }
};
