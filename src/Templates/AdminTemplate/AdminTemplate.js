import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { Layout, Menu, Breadcrumb } from "antd";
import { FileOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import { history } from "../../App";
import { TOKEN, USER_LOGIN } from "../../Util/Settings/config.js";

const { Header, Content, Footer, Sider } = Layout;

export default function AdminTemplate(props) {
   // props includes path, exact, Component
   const { Component, ...restProps } = props;
   const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
   const [collapsed, setCollapsed] = useState(false);
   const onCollapse = (collapsed) => {
      setCollapsed(collapsed);
   };
   useEffect(() => {
      window.scrollTo(0, 0);
   });

   if (!localStorage.getItem(USER_LOGIN)) {
      alert("Bạn không có quyền truy cập vào trang này !");
      return <Redirect to="/" />;
   }

   if (userLogin.maLoaiNguoiDung !== "QuanTri") {
      alert("Bạn không có quyền truy cập vào trang này !");
      return <Redirect to="/" />;
   }

   const operations = (
      <Fragment>
         {!_.isEmpty(userLogin) ? (
            <Fragment>
               {" "}
               <button
                  onClick={() => {
                     history.push("/profile");
                  }}
               >
                  {" "}
                  <div
                     style={{
                        width: 50,
                        height: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                     className="text-2xl ml-5 rounded-full bg-red-200"
                  >
                     {userLogin.taiKhoan.substr(0, 1)}
                  </div>
                  Hello ! {userLogin.taiKhoan}
               </button>{" "}
               <button
                  onClick={() => {
                     localStorage.removeItem(USER_LOGIN);
                     localStorage.removeItem(TOKEN);
                     history.push("/home");
                     window.location.reload();
                  }}
                  className="text-blue-800"
               >
                  Đăng xuất
               </button>{" "}
            </Fragment>
         ) : (
            ""
         )}
      </Fragment>
   );
   function getItem(label, key, icon, children) {
      return {
         key,
         icon,
         children,
         label,
      };
   }
   const items = [
      getItem(
         <NavLink to="/admin/users">Users</NavLink>,
         "1",
         <UserOutlined />
      ),
      getItem("Films", "sub1", <FileOutlined />, [
         getItem(
            <NavLink to="/admin/films">Films</NavLink>,
            "10",
            <FileOutlined />
         ),
         getItem(
            <NavLink to="/admin/films/addnew">Add New</NavLink>,
            "11",
            <FileOutlined />
         ),
      ]),
   ];
   return (
      <Route
         {...restProps}
         render={(propsRoute) => {
            // propsRoute includes props.location,props.history,props.match
            return (
               <Fragment>
                  <Layout style={{ minHeight: "100vh" }}>
                     <Sider
                        collapsible
                        collapsed={collapsed}
                        onCollapse={onCollapse}
                     >
                        <div className="logo p-5">
                           <img
                              src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                              alt="..."
                           />
                        </div>
                        <Menu
                           theme="dark"
                           defaultSelectedKeys={["1"]}
                           mode="inline"
                           items={items}
                        />
                     </Sider>
                     <Layout className="site-layout">
                        <Header
                           className="site-layout-background"
                           style={{ padding: 0 }}
                        >
                           <div className="text-right pr-10 pt-1">
                              {operations}
                           </div>
                        </Header>
                        <Content style={{ margin: "0 16px" }}>
                           <Breadcrumb
                              style={{ margin: "16px 0" }}
                           ></Breadcrumb>
                           <div
                              className="site-layout-background"
                              style={{ padding: 24, minHeight: "85vh" }}
                           >
                              <Component {...propsRoute} />
                           </div>
                        </Content>
                        <Footer style={{ textAlign: "center" }}>
                           Ant Design ©2018 Created by Ant UED
                        </Footer>
                     </Layout>
                  </Layout>
               </Fragment>
            );
         }}
      />
   );
}
