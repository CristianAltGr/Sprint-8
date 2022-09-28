import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../components/navbar";
import Home from "../pages/home"
import ShipInfo from "../pages/shipInfo";
import Ships from "../pages/ships"
import PrivateRoute from "./privateRoute";

const Router = () => {

    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path={process.env.PUBLIC_URL}>
                    <Route index element={<Home />} />
                    <Route path="ships/" element={<PrivateRoute />}>
                        <Route index element={<Ships />} />
                    </Route>
                    <Route path="ships/shipInfo/:id" element={<PrivateRoute />} >
                        <Route index element={<ShipInfo />} />
                    </Route>
                </Route>
                <Route path="*" element={<div><h2>404 not found</h2></div>} />
            </Routes>
        </BrowserRouter >
    )
};

export default Router;