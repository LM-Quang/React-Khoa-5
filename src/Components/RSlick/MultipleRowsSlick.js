import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../../Redux/Type/QuanLyPhimType.js";
import Film from "../Film/Film.js";
import styleSlick from "./MultipleRowsSlick.module.css";

function SampleNextArrow(props) {
   const { className, style, onClick } = props;
   return <div className={`${className} ${styleSlick["slick-prev"]}`} style={{ ...style, display: "block" }} onClick={onClick}></div>;
}

function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
   return <div className={`${className} ${styleSlick["slick-prev"]}`} style={{ ...style, display: "block", left: "-50px" }} onClick={onClick}></div>;
}

export default function MultipleRowsSlick() {
   const dispatch = useDispatch();
   const { arrPhim, dangChieu, sapChieu } = useSelector((state) => state.QuanLyPhimReducer);
   let activeClassDC = dangChieu ? "active_Film" : "none_active_Film";
   let activeClassSC = sapChieu ? "active_Film" : "none_active_Film";
   const settings = {
      className: "center variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      speed: 500,
      rows: 1,
      slidesPerRow: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   };
   return (
      <div
         style={{
            width: 1450,
            display: "block",
            margin: "auto",
         }}
      >
         <div className="mb-4 px-2">
            <button
               className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded bg-gray-800 text-white border border-gray-800 mr-2`}
               onClick={() => {
                  dispatch({
                     type: SET_PHIM_DANG_CHIEU,
                  });
               }}
            >
               Đang Chiếu
            </button>
            <button
               className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded bg-white text-gray-800 border border-gray-800`}
               onClick={() => {
                  dispatch({
                     type: SET_PHIM_SAP_CHIEU,
                  });
               }}
            >
               Sắp Chiếu
            </button>
         </div>

         <Slider {...settings}>
            {arrPhim.map((phim, index) => {
               return (
                  <div key={index} className={`${styleSlick["width-item"]}`}>
                     <Film phim={phim} />
                  </div>
               );
            })}
         </Slider>
      </div>
   );
}
