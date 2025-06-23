import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Onu from "../pages/Onu"
import Restric from "../pages/Restric";
import ObjectivosHC from "../pages/objetHC";
import HuellaCarbono from "../pages/huellaCarbono";
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/pagina1" element={<Onu />} />
            <Route path="/pagina2" element={<Restric />} />
            <Route path="/pagina3" element={<ObjectivosHC />} />
            <Route path="/pagina4" element={<HuellaCarbono />} />
        </Routes>
    )
}