import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../aplication/provider";


const PrivateRoute = () => {

    const [logged] = useContext(AppContext);

    if (!logged) {
        return <Navigate to={process.env.PUBLIC_URL} />
    }

    return (
        <>
            <Outlet />
        </>
    );
}

export default PrivateRoute;

