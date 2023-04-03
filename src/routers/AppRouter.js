import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Globaltrain from '../components/landing/Globaltrain';
import Tracking from '../components/tracking/Tracking';

export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Globaltrain />} />
            <Route path="tracker" element={<Tracking />} />
        </Routes>
    </BrowserRouter>
)