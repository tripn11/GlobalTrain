import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Globaltrain from '../components/landing/Globaltrain';
import Tracking from '../components/tracking/Tracking';
import Admin from "../components/private/Admin";
import AddShipment from "../components/private/AddShipment";

export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Globaltrain />} />
            <Route path="tracker" element={<Tracking />} />
            <Route path="admin" element={<Admin />} />
            <Route path="admin/addShipment" element={<AddShipment />} />
        </Routes>
    </BrowserRouter>
)