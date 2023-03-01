import React, { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { Tabs, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { layThongTinLichChieuPhimAction } from "../../Redux/Actions/QuanLyRapAction.js";
import "../../Assets/Styles/circle.scss";

export default function Detail(props) {
   const dispatch = useDispatch();
   const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);
   useEffect(() => {
      // Get param info from URL
      const { id } = props.match.params;
      // Call API
      dispatch(layThongTinLichChieuPhimAction(id));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   const renderLichChieu = (cumRap) => {
      return cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
         return (
            <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="col-span-1 text-green-800 font-bold">
               {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
            </NavLink>
         );
      });
   };
   const renderCumRap = (htr) => {
      return htr.cumRapChieu?.map((cumRap, index) => {
         return (
            <div className="mt-5" key={index}>
               <div className="flex flex-row">
                  <img style={{ width: 60, height: 60 }} src={cumRap.hinhAnh} alt={cumRap.tenCumRap} />
                  <div className="ml-2">
                     <p style={{ fontSize: 20, fontWeight: "bold", lineHeight: 1 }}>{cumRap.tenCumRap}</p>
                     <p className="text-gray-400" style={{ marginTop: 0 }}>
                        {cumRap.diaChi}
                     </p>
                  </div>
               </div>
               <div className="thong-tin-lich-chieu grid grid-cols-4">{renderLichChieu(cumRap)}</div>
            </div>
         );
      });
   };
   const renderHTR = (filmDetail) => {
      return filmDetail.heThongRapChieu?.map((htr, index) => {
         return {
            label: (
               <div className="flex flex-row items-center justify-center">
                  <img src={htr.logo} className="rounded-full w-full" style={{ width: 50 }} alt={htr.tenHeThongRap} />
                  <div className="text-center ml-2">{htr.tenHeThongRap}</div>
               </div>
            ),
            key: index,
            children: renderCumRap(htr),
         };
      });
   };
   return (
      <div style={{ backgroundImage: "url(https://picsum.photos/1000)", minHeight: "100vh" }}>
         <CustomCard
            style={{ paddingTop: 150, minHeight: "100vh" }}
            effectColor="#fff" // required
            color="#fff" // default color is white
            blur={20} // default blur value is 10px
            borderRadius={0} // default border radius value is 10px
         >
            <div className="grid grid-cols-12">
               <div className="col-span-5 col-start-3">
                  <div className="grid grid-cols-3">
                     <img className="col-span-1" src={filmDetail.hinhAnh} style={{ width: "100%", height: 300 }} alt="123" />
                     <div className="col-span-2 ml-5">
                        <p className="text-sm">Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}</p>
                        <p className="text-4xl ">{filmDetail.tenPhim}</p>
                        <p>{filmDetail.moTa}</p>
                     </div>
                  </div>
               </div>

               <div className="col-span-4 flex flex-col items-center">
                  <h1 style={{ color: "yellow", fontWeight: "bold", fontSize: 15 }}>Đánh giá</h1>
                  <h1 className="text-green-400 text-2xl">
                     <Rate allowHalf value={filmDetail.danhGia / 2} style={{ color: "#78ed78", fontSize: 30 }} />
                  </h1>
                  <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                     <span className="text-white">{filmDetail.danhGia * 10}%</span>
                     <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="mt-10 ml-72 w-2/3 container bg-white px-5 py-5">
               <Tabs
                  defaultActiveKey="1"
                  centered
                  items={[
                     {
                        label: "Lịch chiếu",
                        key: 1,
                        children: (
                           <div style={{ minHeight: 300 }}>
                              {filmDetail.heThongRapChieu?.length !== 0 ? <Tabs tabPosition="left" items={renderHTR(filmDetail)} /> : <p className="text-center font-bold text-lg">Không có suất chiếu</p>}
                           </div>
                        ),
                     },
                     { label: "Thông tin", key: 2, children: <div style={{ minHeight: 300 }}>Thông tin</div> },
                     { label: "Đánh giá", key: 3, children: <div style={{ minHeight: 300 }}>Đánh giá</div> },
                  ]}
               />
            </div>
         </CustomCard>
      </div>
   );
}
