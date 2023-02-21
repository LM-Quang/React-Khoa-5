import { Route } from "react-router-dom";
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
                  <header>This is Homepage's Header</header>
                  <Component {...propsRoute} />
                  <footer>This is Homepage's Footer</footer>
               </>
            );
         }}
      />
   );
};
