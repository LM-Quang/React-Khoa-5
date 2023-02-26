import { Redirect, Route } from "react-router-dom";
import { USER_LOGIN } from "../../Util/Settings/config.js";

export const CheckOutTemplate = (props) => {
   // props include Component, exact, path
   const { Component, ...restProps } = props;
   if (!localStorage.getItem(USER_LOGIN)) {
      return <Redirect to="/login" />;
   }
   return (
      <Route
         {...restProps}
         render={(propsRoute) => {
            // propsRoute includes props.history, location, match
            return (
               <>
                  <Component {...propsRoute} />
               </>
            );
         }}
      />
   );
};
