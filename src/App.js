import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import Loading from "./Components/Loading/Loading.js";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard.js";
import AddNew from "./Pages/Admin/Films/AddNew/AddNew.js";
import Edit from "./Pages/Admin/Films/Edit/Edit.js";
import Films from "./Pages/Admin/Films/Films.js";
import ShowTime from "./Pages/Admin/Showtime/ShowTime.js";
import CheckOut from "./Pages/CheckOut/CheckOut.js";
import Contact from "./Pages/Contact/Contact.js";
import Detail from "./Pages/Detail/Detail.js";
import Home from "./Pages/Home/Home.js";
import Login from "./Pages/Login/Login.js";
import News from "./Pages/News/News.js";
import Profile from "./Pages/Profile/Profile.js";
import Register from "./Pages/Register/Register.js";
import AdminTemplate from "./Templates/AdminTemplate/AdminTemplate.js";
import { CheckOutTemplate } from "./Templates/CheckOutTemplate/CheckOutTemplate.js";
import { HomeTemplate } from "./Templates/HomeTemplate/HomeTamplate.js";
import { UserTemplate } from "./Templates/UserTemplate/UserTemplate.js";
// Import React Lazy
// import { Suspense, lazy } from "react";
// const CheckOutTemplateLazy = lazy(() => import("./Templates/CheckOutTemplate/CheckOutTemplate.js"));

export const history = createBrowserHistory();
export default function App() {
   return (
      <Router history={history}>
         <Loading />
         <Switch>
            <HomeTemplate path="/" exact Component={Home} />
            <HomeTemplate path="/home" exact Component={Home} />
            <HomeTemplate path="/contact" exact Component={Contact} />
            <HomeTemplate path="/news" exact Component={News} />
            <HomeTemplate path="/detail/:id" exact Component={Detail} />
            <HomeTemplate path="/profile" exact Component={Profile} />
            <UserTemplate path="/login" exact Component={Login} />
            <UserTemplate path="/register" exact Component={Register} />
            <CheckOutTemplate path="/checkout/:id" exact Component={CheckOut} />
            {/* <Suspense fallback={<h1>LOADING...</h1>}>
               <CheckOutTemplateLazy path="/checkout/:id" exact Component={CheckOut} />
            </Suspense> */}
            <AdminTemplate path="/admin" exact Component={Dashboard} />
            <AdminTemplate path="/admin/films" exact Component={Films} />
            <AdminTemplate
               path="/admin/films/addnew"
               exact
               Component={AddNew}
            />
            <AdminTemplate
               path="/admin/films/edit/:id"
               exact
               Component={Edit}
            />
            <AdminTemplate
               path="/admin/films/showtime/:id/:tenphim"
               exact
               Component={ShowTime}
            />
            <AdminTemplate path="/admin/users" exact Component={Dashboard} />
         </Switch>
      </Router>
   );
}
