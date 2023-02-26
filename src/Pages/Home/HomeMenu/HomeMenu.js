import React, { Fragment } from "react";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane.js";
import { NavLink } from "react-router-dom";
import moment from "moment";
export default function HomeMenu(props) {
   const renderHeThongRapChieu = () => {
      return props.heThongRapChieu?.map((heThongRap, index) => {
         return (
            <TabPane key={index} tab={<img src={heThongRap.logo} className="rounded-full" width={50} alt="ramdom pic" />}>
               <Tabs tabPosition="left">
                  {heThongRap.lstCumRap?.map((cumRap, index) => {
                     return (
                        <TabPane
                           key={index}
                           tab={
                              <div style={{ width: 300, display: "flex" }}>
                                 <img src={heThongRap.logo} width={60} alt="ramdom pic" />
                                 <div className="text-left ml-3 mt-3">
                                    {cumRap.tenCumRap}
                                    <p className="text-red-200">Detail</p>
                                 </div>
                              </div>
                           }
                        >
                           {cumRap.danhSachPhim?.map((phim, index) => {
                              return (
                                 <Fragment key={index}>
                                    <div className="my-5">
                                       <div className="flex">
                                          <img src={phim.hinhAnh} style={{ width: 100, height: 100 }} alt={phim.tenPhim} />
                                          <div className="ml-2">
                                             <h1 className="text-2x1 text-green-700">{phim.tenPhim}</h1>
                                             <p>{cumRap.diaChi}</p>
                                             <div className="grid grid-cols-6 gap-6">
                                                {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                   return (
                                                      <NavLink key={index} to="/" className="text-2x1 text-green-400">
                                                         {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                                                      </NavLink>
                                                   );
                                                })}
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <hr />
                                 </Fragment>
                              );
                           })}
                        </TabPane>
                     );
                  })}
               </Tabs>
            </TabPane>
         );
      });
   };
   return (
      <>
         <Tabs tabPosition="left">{renderHeThongRapChieu()}</Tabs>
      </>
   );
}
