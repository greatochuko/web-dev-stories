import { Navigate, Outlet } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

export default function Authenticate() {
  const { user } = useUserContext();
  if (!user) return <Navigate to={"/"} />;
  return <Outlet />;
}
