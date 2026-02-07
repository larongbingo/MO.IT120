import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landing/LandingPage.tsx";
import AppPage from "./app/AppPage.tsx";
import AppLayout from "./app/layouts/AppLayout.tsx";
import StudyGroupsPage from "./app/StudyGroupsPage.tsx";
import CourseCommunitiesPage from "./app/CourseCommunitiesPage.tsx";
import MessagesPage from "./app/MessagesPage.tsx";
import ProfilePage from "./app/ProfilePage.tsx";
import FirstTimeLoginPage from "./app/FirstTimeLoginPage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path="firsttime" element={<FirstTimeLoginPage />} />
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
