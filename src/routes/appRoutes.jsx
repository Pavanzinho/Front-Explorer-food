import { Routes, Route } from "react-router-dom";
import { Menu } from "../pages/Menu";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/menu" element={<Menu/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/details/:id" element={<Details/>} />
        </Routes>
    )

}