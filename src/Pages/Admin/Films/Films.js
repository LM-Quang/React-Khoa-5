import React, { Fragment, useEffect } from "react";
import { Button, Table, Input } from "antd";
import {
   EditOutlined,
   SearchOutlined,
   DeleteOutlined,
   CalendarOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { history } from "../../../App";
import {
   layDanhSachPhimAction,
   xoaPhimAction,
} from "../../../Redux/Actions/QuanLyPhimAction.js";
const { Search } = Input;

export default function Films() {
   const { arrPhimDefault } = useSelector((state) => state.QuanLyPhimReducer);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(layDanhSachPhimAction());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const columns = [
      {
         title: "Mã phim",
         dataIndex: "maPhim",
         sorter: (a, b) => a.maPhim - b.maPhim,
         sortDirections: ["descend", "ascend"],
         width: "15%",
      },
      {
         title: "Hình ảnh",
         dataIndex: "hinhAnh",
         render: (text, film, index) => {
            return (
               <Fragment>
                  <img
                     src={film.hinhAnh}
                     alt={film.tenPhim}
                     width={50}
                     height={50}
                     onError={(e) => {
                        e.target.onError = null;
                        e.target.src = `https://picsum.photos/id/${index}/50/50`;
                     }}
                  />
               </Fragment>
            );
         },
         width: "15%",
      },
      {
         title: "Tên phim",
         dataIndex: "tenPhim",
         sorter: (a, b) => {
            let tenPhimA = a.tenPhim.toLowerCase().trim();
            let tenPhimB = b.tenPhim.toLowerCase().trim();
            if (tenPhimA > tenPhimB) {
               return 1;
            }
            return -1;
         },
         sortDirections: ["descend", "ascend"],
         width: "25%",
      },
      {
         title: "Mô tả",
         dataIndex: "moTa",
         render: (text, film) => {
            return (
               <Fragment>
                  {film.moTa.length > 50
                     ? film.moTa.substr(0, 50) + " ..."
                     : film.moTa}
               </Fragment>
            );
         },
         sortDirections: ["descend", "ascend"],
         width: "25%",
      },
      {
         title: "Hành động",
         dataIndex: "maPhim",
         render: (text, film) => {
            return (
               <Fragment>
                  <NavLink
                     key={1}
                     className=" mr-2  text-2xl"
                     to={`/admin/films/edit/${film.maPhim}`}
                  >
                     <EditOutlined style={{ color: "blue" }} />{" "}
                  </NavLink>
                  <span
                     style={{ cursor: "pointer" }}
                     key={2}
                     className="text-2xl"
                     onClick={() => {
                        //Gọi action xoá
                        if (
                           window.confirm(
                              "Bạn có chắc muốn xoá phim " + film.tenPhim
                           )
                        ) {
                           //Gọi action
                           dispatch(xoaPhimAction(film.maPhim));
                        }
                     }}
                  >
                     <DeleteOutlined style={{ color: "red" }} />{" "}
                  </span>
                  <NavLink
                     key={3}
                     className=" mr-2 text-2xl"
                     to={`/admin/films/showtime/${film.maPhim}/${film.tenPhim}`}
                     onClick={() => {
                        localStorage.setItem(
                           "filmParams",
                           JSON.stringify(film)
                        );
                     }}
                  >
                     <CalendarOutlined style={{ color: "green" }} />{" "}
                  </NavLink>
               </Fragment>
            );
         },
         sortDirections: ["descend", "ascend"],
         width: "25%",
      },
   ];

   const onSearch = (value) => {
      //Gọi api layDanhSachPhim
      dispatch(layDanhSachPhimAction(value));
   };

   return (
      <div>
         <h3 className="text-4xl">Quản lý Phim</h3>
         <Button
            className="mb-5"
            onClick={() => {
               history.push("/admin/films/addnew");
            }}
         >
            Thêm phim
         </Button>
         <Search
            className="mb-5"
            placeholder="input search text"
            enterButton={<SearchOutlined />}
            size="large"
            onSearch={onSearch}
         />
         <Table
            columns={columns}
            dataSource={arrPhimDefault}
            rowKey={"maPhim"}
         />
      </div>
   );
}
