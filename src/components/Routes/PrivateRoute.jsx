import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getLoggedIn);
  console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
};
