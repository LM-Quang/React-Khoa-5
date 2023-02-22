import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import Contact from "./Pages/Contact/Contact.js";
import Home from "./Pages/Home/Home.js";
import Login from "./Pages/Login/Login.js";
import News from "./Pages/News/News.js";
import Register from "./Pages/Register/Register.js";
import { HomeTemplate } from "./Templates/HomeTemplate/HomeTamplate.js";

export const history = createBrowserHistory();
export default function App() {
   return (
      <Router history={history}>
         <Switch>
            <HomeTemplate path="/" exact Component={Home} />
            <HomeTemplate path="/home" exact Component={Home} />
            <HomeTemplate path="/contact" exact Component={Contact} />
            <HomeTemplate path="/news" exact Component={News} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
         </Switch>
      </Router>
   );
}
