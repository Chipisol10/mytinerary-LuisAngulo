import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = useSelector(state => state.authReducer.token); 
  if (!token) {
    return <Navigate to="/signIn" replace />;
  }
  return children;
}

export default PrivateRoute;