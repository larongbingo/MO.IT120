import Navbar from "../components/Navbar.tsx";
import profilePicture from "/profile pic.png";
import homeLogo from "/Home.png";
import usersLogo from "/Users.png";
import bookLogo from "/Book.png";
import messageLogo from "/Message.png";
import userLogo from "/User.png";
import {Link, Outlet, useLocation} from "react-router-dom";
import ScheduleCard, {type Schedule} from "../components/app/ScheduleCard.tsx";
import {useEffect, useState} from "react";

function AppLayout() {
    return (
        <>
            <Navbar homeRoute="/app">
                <ul className="flex items-center space-x-5">
                    <li>
                        <Link to="/app/profile">
                            <img src={profilePicture} alt="Profile Picture"
                                 className="rounded-full w-14"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
            </Navbar>


            <div className="flex">
                <SideBar/>
                <Outlet />
            </div>
        </>
    )
}

type NavigationSelection = "Home" | "Study Groups" | "Course Communities" | "Messages" | "Profile";
function NavigationItems() {
    const location = useLocation();
    const [selected, setSelected] = useState<NavigationSelection>("Home");
    const selectedClassNames = `bg-gray-100 rounded hover:bg-gray-300 flex items-center space-x-3 px-2 py-1`;
    const unselectedClassNames = `rounded hover:bg-gray-300 flex items-center space-x-3 px-2 py-1`;

    useEffect(() => {
        if (location.pathname.includes("studygroups")) {
            setSelected("Study Groups");
        }
        else if (location.pathname.includes("coursecommunities")) {
            setSelected("Course Communities");
        }
        else if (location.pathname.includes("messages")) {
            setSelected("Messages");
        }
        else if (location.pathname.includes("profile")) {
            setSelected("Profile");
        }
        else {
            setSelected("Home");
        }
    }, [location])

    return (
        <nav>
            <ul className="space-y-2">
                <li>
                    <Link to="/app"
                          className={selected === "Home" ? selectedClassNames : unselectedClassNames}>
                        <img src={homeLogo} alt="Home Logo" className="w-5"/>
                        <span className="">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/app/studygroups"
                          className={selected === "Study Groups" ? selectedClassNames : unselectedClassNames}>
                        <img src={usersLogo} alt="Study Groups Logo" className="w-5"/>
                        <span>Study Groups</span>
                    </Link>
                </li>
                <li>
                    <Link to="/app/coursecommunities"
                          className={selected === "Course Communities" ? selectedClassNames : unselectedClassNames}>
                        <img src={bookLogo} alt="Course Communities Logo" className="w-5"/>
                        <span>Course Communities</span>
                    </Link>
                </li>
                <li>
                    <Link to="/app/messages"
                          className={selected === "Messages" ? selectedClassNames : unselectedClassNames}>
                        <img src={messageLogo} alt="Messages Logo" className="w-5"/>
                        <span>Messages</span>
                    </Link>
                </li>
                <li>
                    <Link to="/app/profile"
                          className={selected === "Profile" ? selectedClassNames : unselectedClassNames}>
                        <img src={userLogo} alt="Profile Logo" className="w-5"/>
                        <span>Profile</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

function SideBar() {
    const today = new Date();
    const schedule: Schedule[] = [
        { date: new Date(today.setHours(2)), event: "Computer Science Study Group" },
        { date: new Date(today.setHours(3)), event: "Math Study Group" },
        { date: new Date(today.setHours(5)), event: "Physics Study Group" },
    ];

    return (
        <section className="md:block hidden h-screen border-r border-border border-gray-200 sticky top-0 p-3 space-y-14">
            <NavigationItems/>
            <ScheduleCard schedule={schedule}/>
        </section>
    )
}

export default AppLayout;