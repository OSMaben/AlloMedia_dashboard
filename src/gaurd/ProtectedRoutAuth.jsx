import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoutAuth = ({ children }) => {
  const { isLogin } = useSelector((state) => state.auth);
  console.log("ana machi logi " ,  isLogin);
  
  return isLogin ? <Navigate to="/" /> : children;
};

export default ProtectedRoutAuth;
