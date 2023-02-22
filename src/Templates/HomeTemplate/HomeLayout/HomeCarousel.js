import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCarouselAction } from "../../../Redux/Actions/CarouselAction.js";

const contentStyle = {
   height: "500px",
   color: "#fff",
   lineHeight: "160px",
   textAlign: "center",
   background: "#364d79",
};

export default function HomeCarousel(props) {
   const { arrImg } = useSelector((state) => state.CarouselReducer);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getCarouselAction);
   });
   const renderCarousel = () => {
      return arrImg?.map((img, index) => {
         return (
            <div key={index} style={contentStyle}>
               <img src={img.hinhAnh} alt="random pic" className="w-full" />
            </div>
         );
      });
   };
   return <Carousel autoplay>{renderCarousel()}</Carousel>;
}
