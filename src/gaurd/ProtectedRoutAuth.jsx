import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoutAuth = ({ children }) => {
  const { isLogin } = useSelector((state) => state.auth);

  return isLogin ? <Navigate to="/" /> : children;
};

export default ProtectedRoutAuth;
