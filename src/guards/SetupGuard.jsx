import { Navigate } from "react-router-dom";

const SetupGuard = ({ children }) => {
  const org = JSON.parse(localStorage.getItem("org"));

  if (org?.isSetupComplete) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default SetupGuard;
