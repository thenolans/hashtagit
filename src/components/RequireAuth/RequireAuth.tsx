import { useAuth0 } from "@auth0/auth0-react";
import Urls from "constants/urls";
import { Navigate, Outlet } from "react-router-dom";

export default function RequireAuth() {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <Navigate to={Urls.routes.root} replace />;
  }

  return <Outlet />;
}
