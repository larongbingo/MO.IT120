import connectlyLogo from "/Logo.png";
import profilePic from "/profile pic.png";

function Navbar({isLoggedIn}: { isLoggedIn: boolean }) {
    return (
        <header className="bg-gray-400">
            <nav className="flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-5">
                    <img src={connectlyLogo} alt="Connectly Logo" width="40"/>
                    <h5 className="text-xl">Connectly</h5>
                </a>

                {
                    !isLoggedIn ?
                        (
                            <ul className="flex items-center space-x-5">
                                <li>
                                    <a href="./app.html">Sign In</a>
                                </li>
                                <li>
                                    <a href="./app.html" className="text-white bg-gray-800 hover:bg-gray-950 p-2 rounded">Get
                                        Started</a>
                                </li>
                            </ul>
                        ) :
                        (
                            <ul className="flex items-center space-x-5">
                                <li>
                                    <a href="#">
                                        <img src={profilePic} alt="Profile Picture"
                                             className="rounded-full w-14"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">Logout </a>
                                </li>
                            </ul>
                        )
                }
            </nav>
        </header>
    )
}

export default Navbar