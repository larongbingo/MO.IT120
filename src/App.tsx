import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import AppPage from "./pages/AppPage.tsx";
import AppLayout from "./layouts/AppLayout.tsx";
import StudyGroupsPage from "./pages/StudyGroupsPage.tsx";
import CourseCommunitiesPage from "./pages/CourseCommunitiesPage.tsx";
import MessagesPage from "./pages/MessagesPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path="app" element={<AppLayout />}>
                    <Route index element={<AppPage />} />
                    <Route path="studygroups" element={<StudyGroupsPage />} />
                    <Route path="coursecommunities" element={<CourseCommunitiesPage />} />
                    <Route path="messages" element={<MessagesPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
