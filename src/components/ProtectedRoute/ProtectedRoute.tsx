import Urls from "constants/urls";
import { ComponentType } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

type Props = RouteProps & { component: ComponentType<any> };

const ProtectedRoute = ({ component: Component, ...routeProps }: Props) => {
  // TODO: connect protected route to Auth0
  const token = "foo";
  const isAuthenticated = Boolean(token);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={Urls.routes.login} />
        )
      }
    />
  );
};

export default ProtectedRoute;
