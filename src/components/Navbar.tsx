import connectlyLogo from "/Logo.png";
import * as React from "react";
import {Link} from "react-router-dom";

function Navbar({children, homeRoute}: { children: React.ReactNode, homeRoute: string }) {
    return (
        <header className="bg-gray-400">
            <nav className="flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={homeRoute} className="flex items-center space-x-5">
                    <img src={connectlyLogo} alt="Connectly Logo" width="40"/>
                    <h5 className="text-xl">Connectly</h5>
                </Link>
                {children}
            </nav>
        </header>
    )
}

export default Navbar