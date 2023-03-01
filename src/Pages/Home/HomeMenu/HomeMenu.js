import React, { Fragment } from "react";
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";
export default function HomeMenu(props) {
   const renderLichChieuPhim = (phim) => {
      return phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
         return (
            <NavLink key={index} to={`/checkout/${lichChieu.maLichChieu}`} className="text-2x1 text-green-400">
               {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
            </NavLink>
         );
      });
   };
   const renderPhim = (cumRap) => {
      return cumRap.danhSachPhim?.map((phim, index) => {
         return (
            <Fragment key={index}>
               <div className="my-5">
                  <div className="flex">
                     <img src={phim.hinhAnh} style={{ width: 100, height: 100 }} alt={phim.tenPhim} />
                     <div className="ml-2">
                        <h1 className="text-2x1 text-green-700">{phim.tenPhim}</h1>
                        <p>{cumRap.diaChi}</p>
                        <div className="grid grid-cols-6 gap-6">{renderLichChieuPhim(phim)}</div>
                     </div>
                  </div>
               </div>
               <hr />
            </Fragment>
         );
      });
   };
   const renderCumRap = (heThongRap) => {
      return heThongRap.lstCumRap?.map((cumRap, index) => {
         return {
            label: (
               <div style={{ width: 300, display: "flex" }}>
                  <img src={heThongRap.logo} width={60} alt="ramdom pic" />
                  <div className="text-left ml-3 mt-3">
                     {cumRap.tenCumRap}
                     <p className="text-red-200">Detail</p>
                  </div>
               </div>
            ),
            key: index,
            children: renderPhim(cumRap),
         };
      });
   };
   const renderHeThongRapChieu = () => {
      return props.heThongRapChieu?.map((heThongRap, index) => {
         return {
            label: <img src={heThongRap.logo} className="rounded-full" width={50} alt="he thong rap" />,
            key: index,
            children: <Tabs tabPosition="left" items={renderCumRap(heThongRap)} />,
         };
      });
   };
   return <Tabs tabPosition="left" items={renderHeThongRapChieu()} />;
}
