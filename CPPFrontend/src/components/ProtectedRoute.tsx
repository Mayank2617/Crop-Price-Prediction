// ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = !!localStorage.getItem('token'); // 👈 Token check

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
