import Navbar from "../components/Navbar.tsx";
import profilePicture from "/profile pic.png";
import homeLogo from "/Home.png";
import usersLogo from "/Users.png";
import bookLogo from "/Book.png";
import messageLogo from "/Message.png";
import userLogo from "/User.png";
import {Link} from "react-router-dom";
import ScheduleCard, {type Schedule} from "../components/app/ScheduleCard.tsx";

function AppPage() {
    return (
        <>
            <Navbar homeRoute="/app">
                <ul className="flex items-center space-x-5">
                    <li>
                        <a href="#">
                            <img src={profilePicture} alt="Profile Picture"
                                 className="rounded-full w-14"/>
                        </a>
                    </li>
                    <li>
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
            </Navbar>


            <div className="flex">
                <SideBar/>
            </div>
        </>
    )
}

function NavigationItems() {
    return (
        <nav>
            <ul className="space-y-2">
                <li>
                    <Link to="./app.html"
                          className="bg-gray-100 rounded hover:bg-gray-300 flex items-center space-x-3 px-2 py-1">
                        <img src={homeLogo} alt="Home Logo" className="w-5"/>
                        <span className="">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="#"
                          className="rounded hover:bg-gray-300 flex items-center space-x-3 px-2 py-1">
                        <img src={usersLogo} alt="Study Groups Logo" className="w-5"/>
                        <span>Study Groups</span>
                    </Link>
                </li>
                <li>
                    <Link to=""
                          className="rounded hover:bg-gray-300 flex items-center space-x-3 px-2 py-1">
                        <img src={bookLogo} alt="Course Communities Logo" className="w-5"/>
                        <span>Course Communities</span>
                    </Link>
                </li>
                <li>
                    <Link to=""
                          className="rounded hover:bg-gray-300 flex items-center space-x-3 px-2 py-1">
                        <img src={messageLogo} alt="Messages Logo" className="w-5"/>
                        <span>Messages</span>
                    </Link>
                </li>
                <li>
                    <Link to=""
                          className="rounded hover:bg-gray-300 flex items-center space-x-3 px-2 py-1">
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

export default AppPage;