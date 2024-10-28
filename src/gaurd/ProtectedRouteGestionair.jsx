import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRouteGestionair = ({ children }) => {
  const { isLogin , isGestionair} = useSelector((state) => state.auth);
  console.log(isLogin);
  console.log('"add');
  console.log("is login + " , isLogin);
  
  
  console.log(isGestionair);
  

return isLogin && isGestionair ? children : <Navigate to="/signin" />;
};

export default ProtectedRouteGestionair;
