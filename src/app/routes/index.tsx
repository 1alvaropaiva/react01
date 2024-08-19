import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "../pages";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element = {<Dashboard/>}/>

            </Routes>
        </BrowserRouter>
    );
}