import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { browserRoutes } from '../routes/browserRoutes';
import isEmpty from '../utils/isEmpty';

const ProtectedRoutes = ({ children, redirectLink, pathName }) => {
  const token = useSelector((state) => state.authSlice?.user?.token);

  if (isEmpty(token)) {
    return (
      <Navigate
        state={{ pathName: pathName ? pathName : '' }}
        to={redirectLink ? redirectLink : browserRoutes.LOGIN}
        replace
      />
    );
  }
  return children;
};

export default ProtectedRoutes;
