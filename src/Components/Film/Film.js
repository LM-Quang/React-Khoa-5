import React from "react";

export default function Film(props) {
   const { phim } = props;
   return (
      <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 mx-2 mb-2 rounded-lg overflow-hidden text-center relative">
         <div style={{ backgroundImage: `url(${phim.hinhAnh})`, backgroundPosition: "center", backgroundSize: "cover" }}>
            <img className="opacity-0 w-full" src={phim.hinhAnh} alt={phim.tenPhim} style={{ height: 200 }} />
         </div>
         <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 my-3 h-16">{phim.tenPhim}</h1>
         <p className="leading-relaxed mb-3 h-14">{phim.moTa.length > 100 ? <span>{phim.moTa.slice(0, 100)}...</span> : <span>{phim.moTa}</span>}</p>
         <a href="/" className="text-indigo-500 inline-flex items-center">
            Booking Ticket
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
               <path d="M5 12h14" />
               <path d="M12 5l7 7-7 7" />
            </svg>
         </a>
      </div>
   );
}
