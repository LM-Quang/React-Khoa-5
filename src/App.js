import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import CheckOut from "./Pages/CheckOut/CheckOut.js";
import Contact from "./Pages/Contact/Contact.js";
import Detail from "./Pages/Detail/Detail.js";
import Home from "./Pages/Home/Home.js";
import Login from "./Pages/Login/Login.js";
import News from "./Pages/News/News.js";
import Register from "./Pages/Register/Register.js";
import { CheckOutTemplate } from "./Templates/CheckOutTemplate/CheckOutTemplate.js";
import { HomeTemplate } from "./Templates/HomeTemplate/HomeTamplate.js";
// Import React Lazy
import { Suspense, lazy } from "react";
const CheckOutTemplateLazy = lazy(() => import("./Templates/CheckOutTemplate/CheckOutTemplate.js"));

export const history = createBrowserHistory();
export default function App() {
   return (
      <Router history={history}>
         <Switch>
            <HomeTemplate path="/" exact Component={Home} />
            <HomeTemplate path="/home" exact Component={Home} />
            <HomeTemplate path="/contact" exact Component={Contact} />
            <HomeTemplate path="/news" exact Component={News} />
            <HomeTemplate path="/detail/:id" exact Component={Detail} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Suspense fallback={<h1>LOADING...</h1>}>
               <CheckOutTemplateLazy path="/checkout/:id" exact Component={CheckOut} />
            </Suspense>
         </Switch>
      </Router>
   );
}
