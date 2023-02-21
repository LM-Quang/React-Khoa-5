import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import { HomeTemplate } from "./Templates/HomeTemplate/HomeTamplate.js";

export const history = createBrowserHistory();
export default function App() {
   return (
      <Router history={history}>
         <HomeTemplate path="/" exact Component={Home} />
      </Router>
   );
}
