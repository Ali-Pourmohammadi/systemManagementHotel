/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1- Check the user is logged or not
  const { isAuth, isLoading } = useUser();
  //3-  redirect usr if not logged in
  useEffect(
    function () {
      if (!isAuth && !isLoading) navigate("/login");
    },
    [isAuth, navigate , isLoading]
  );
  //2- loading
  if (isLoading) return <Spinner />;

  // 4- return child if user logged and auth is success
  if(isAuth) return children;
}
