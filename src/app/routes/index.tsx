import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "../pages";
import { Redirect } from "react-router-dom";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element = {<Dashboard/>}/>
                <Route path="*" element = {<Redirect to="/pagina-inicial" />} />

            </Routes>
        </BrowserRouter>
    );
}