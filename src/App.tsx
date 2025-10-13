import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import AppPage from "./pages/AppPage.tsx";
import AppLayout from "./layouts/AppLayout.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path="app" element={<AppLayout />}>
                    <Route index element={<AppPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
