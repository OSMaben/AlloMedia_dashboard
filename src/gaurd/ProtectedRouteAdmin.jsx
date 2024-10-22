import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRouteAdmin = ({ children }) => {
  const { isLogin , isAdmin} = useSelector((state) => state.auth);
  console.log(isLogin);
  console.log('"add');
  console.log("is login + " , isLogin);
  
  
  console.log(isAdmin);
  

return isLogin && isAdmin ? children : <Navigate to="/signin" />;
};

export default ProtectedRouteAdmin;
