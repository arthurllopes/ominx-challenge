import { useCep } from "../contexts/cepContext";
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const location = useLocation()
    const {cep} = useCep()

    if (!cep) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    
    return children
}

export default ProtectedRoute