import { useEffect } from "react";
import {Routes, Route, useNavigate } from 'react-router-dom'
import { Home } from "../../Pages/Home/Home";
import { About } from "./../../Pages/About/About";

const Redirect = ({ to }) => {
    let navigate = useNavigate();
    useEffect(() => {
        navigate(to);
    });
    return null;
}

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route element={<About />} />
        </Routes>
    )
}