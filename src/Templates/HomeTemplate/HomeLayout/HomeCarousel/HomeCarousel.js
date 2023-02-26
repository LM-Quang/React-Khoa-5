import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCarouselAction } from "../../../../Redux/Actions/CarouselAction.js";
import "./HomeCarousel.css";
const contentStyle = {
   height: "300px",
   color: "#fff",
   lineHeight: "160px",
   textAlign: "center",
   backgroundPosition: "center",
   backgroundSize: "100%",
   backgroundRepeat: "no-repeat",
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
            <div key={index} style={{ ...contentStyle, backgroundImage: `url(${img.hinhAnh})` }}>
               <img src={img.hinhAnh} alt="random pic" className="w-full" />
            </div>
         );
      });
   };
   return (
      <Carousel effect="fade" autoplay>
         {renderCarousel()}
      </Carousel>
   );
}
