import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import isEmpty from '../utils/isEmpty';

const AuthRoutes = ({ children, redirectLink }) => {
  const location = useLocation();
  const token = useSelector((state) => state.authSlice?.user?.token);
  console.log(token);
  if (!isEmpty(token)) {
    return (
      <Navigate
        to={location.state?.pathName ? location.state?.pathName : redirectLink}
        replace
      />
    );
  }
  return children;
};

export default AuthRoutes;
