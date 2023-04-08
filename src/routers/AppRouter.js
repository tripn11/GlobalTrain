import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Globaltrain from '../components/landing/Globaltrain';
import Tracking from '../components/tracking/Tracking';
import Admin from "../components/private/Admin";
import AddShipment from "../components/private/AddShipment";
import EditShipment from "../components/private/EditShipment";
import PrivateRoute from "./PrivateRoute";

export default () => (
    <BrowserRouter>
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path="admin" element={<Admin />} />
                <Route path="admin/addShipment" element={<AddShipment />} />
                <Route path="admin/editShipment/:id" element = {<EditShipment />} />
            </Route>
            <Route path="/" element={<Globaltrain />} />
            <Route path="tracker" element={<Tracking />} />
        </Routes>
    </BrowserRouter>
)