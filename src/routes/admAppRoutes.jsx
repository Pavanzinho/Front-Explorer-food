import { Routes, Route } from "react-router-dom";
import { AdmMenu } from "../pages/AdmMenu";
import { AdmHome } from "../pages/AdmHome";
import { AdmEditFood } from "../pages/AdmEditFood";
import { AdmDetails} from "../pages/AdmDetails";
import { NewPlate } from "../pages/NewPlate";


export function AdmAppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AdmHome />} />
            <Route path="/admmenu" element={<AdmMenu />} />
            <Route path="/editfood/:id" element={<AdmEditFood />} />
            <Route path="/admdetails/:id" element={<AdmDetails />} />
            <Route path="/newplate" element={<NewPlate />} />
        </Routes>
    )
}