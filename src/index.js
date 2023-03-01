import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/configStore.js";
// Antd Library
import "antd/dist/reset.css";
// React Slick Library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DOMAIN_CONNECT } from "./Util/Settings/config.js";
//Cấu hình realtime (websocket với signalR)
import * as signalR from "@aspnet/signalr";
//Đoạn code để kết nối đến server lắng nghe sự kiện từ server
export const connection = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN_CONNECT}/DatVeHub`).configureLogging(signalR.LogLevel.Information).build();
const root = ReactDOM.createRoot(document.getElementById("root"));
connection
   .start()
   .then(() => {
      root.render(
         <Provider store={store}>
            <App />
         </Provider>
      );
   })
   .catch((errors) => {
      console.log(errors);
   });
