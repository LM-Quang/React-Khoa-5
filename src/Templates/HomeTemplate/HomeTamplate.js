import { useEffect } from "react";
import { Route } from "react-router-dom";
import Footer from "./HomeLayout/Footer.js";
import Header from "./HomeLayout/Header.js";

export const HomeTemplate = (props) => {
   // props include Component, exact, path
   const { Component, ...restProps } = props;
   useEffect(() => {
      window.scrollTo(0, 0);
   });
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
