import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = () => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) return <p>Loading...</p>;

    if (isAuthenticated) {
        return <Navigate to="/game" replace />;
    }

    return <Outlet />;
};

export default PublicRoute;
