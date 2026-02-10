import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../fakeDB/auth";

const ProtectedRoute = ({ children }) => {
  const user = getCurrentUser();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

export default ProtectedRoute;

