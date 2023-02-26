import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MultipleRowsSlick from "../../Components/RSlick/MultipleRowsSlick.js";
import { layDanhSachPhimAction } from "../../Redux/Actions/QuanLyPhimAction.js";
import HomeMenu from "./HomeMenu/HomeMenu.js";

export default function Home() {
   const dispatch = useDispatch();
   const { arrPhim } = useSelector((state) => state.QuanLyPhimReducer);
   useEffect(() => {
      dispatch(layDanhSachPhimAction());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return (
      <div>
         <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
               <MultipleRowsSlick arrPhim={arrPhim} />
            </div>
         </section>
         <HomeMenu />
      </div>
   );
}
