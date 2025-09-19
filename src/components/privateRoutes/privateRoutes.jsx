import Cookies from "js-cookie";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const token = Cookies.get("token");

  return token ? <Outlet /> : <Navigate to= "/"/>;
};

export default PrivateRoutes;
