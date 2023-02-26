import { Route } from "react-router-dom";
import Footer from "./HomeLayout/Footer.js";
import Header from "./HomeLayout/Header.js";

export const HomeTemplate = (props) => {
   // props include Component, exact, path
   const { Component, ...restProps } = props;
   return (
      <Route
         {...restProps}
         render={(propsRoute) => {
            // propsRoute includes props.history, location, match
            return (
               <>
                  <Header />
                  <Component {...propsRoute} />
                  <Footer />
               </>
            );
         }}
      />
   );
};
