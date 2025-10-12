import { Link } from "react-router-dom";
import rightArrow from "/RightArrow.png";
import play from "/Play.png";
import heroSectionImage from "/hero section image.png";
import Navbar from "../components/Navbar.tsx";
import userLogo from "/Users Logo.png";
import lightningLogo from "/Lightning Logo.png";
import bookLogo from "/Book Logo.png";
import contactUsImage from "/contact us section.png";

function LandingPage() {
    return (
        <>
            <Navbar homeRoute="/">
                <ul className="flex items-center space-x-5">
                    <li>
                        <Link to="/app">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/app" className="text-white bg-gray-800 hover:bg-gray-950 p-2 rounded">Get
                            Started</Link>
                    </li>
                </ul>
            </Navbar>
            <main>
                <HeroSection/>
                <FeaturesSection/>
                <ContactUsSection/>
            </main>
        </>
    )
}

function HeroSection() {
    return (
        <section id="heroSection"
                 className="container mx-auto lg:flex lg:items-center lg:justify-between pt-56 pb-56 m-5">
        <div>
                <h2 className="font-bold text-6xl pb-3">Connect, Study and Thrive Together</h2>
                <p className="text-2xl">The social platform built for students. Find study partners, join campus events,
                    and build meaningful connections that last beyond graduation.</p>
                <nav className="flex items-center space-x-10 mt-10">
                    <Link to="/app"
                       className="text-white rounded bg-gray-800 hover:bg-gray-950 pt-2 pb-2 pl-4 pr-4 flex items-center space-x-2">
                        <span>Join Connectly</span>
                        <img src={rightArrow} className="h-3.5"/>
                    </Link>
                    <a href="#"
                       className="rounded outline-2 outline-gray-400 bg-gray-200 hover:bg-gray-400 pt-2 pb-2 pl-4 pr-4 flex items-center space-x-2">
                        <img src={play} className="h-3.5"/>
                        <span>Watch Demo</span>
                    </a>
                </nav>
            </div>
            <img src={heroSectionImage} alt="Students studying"
                 className="rounded shadow-2xl w-5xl lg:mt-0 mt-10"/>
        </section>
    )
}

function FeaturesSection() {
    return (
        <section id="featuresSection" className="bg-gray-300 pt-52 pb-52">
            <h2 className="text-center font-bold text-3xl">Everything you need to succeed</h2>
            <p className="text-center font-medium text-xl p-3">Connectly brings together all the tools and connections
                you need to excel in your academic journey.</p>

            <div className="lg:flex lg:items-center container mx-auto">
                <div className="bg-white rounded m-10 p-10 space-y-3 min-h-60">
                    <img src={userLogo} className="w-10"/>
                    <h4 className="font-medium text-xl">Study Groups</h4>
                    <p>Find and create study groups for your classes. Connect with classmates who share your academic
                        goals.</p>
                </div>
                <div className="bg-white rounded m-10 p-10 space-y-3 min-h-60">
                    <img src={lightningLogo} className="w-10"/>
                    <h4 className="font-medium text-xl">Quick Connections</h4>
                    <p>Instantly connect with students in your major or classes. Build your academic network
                        effortlessly.</p>
                </div>
                <div className="bg-white rounded m-10 p-10 space-y-3 min-h-60">
                    <img src={bookLogo} className="w-10"/>
                    <h4 className="font-medium text-xl">Course Communities</h4>
                    <p>Join communities for your specific courses. Share notes, ask questions, and collaborate on
                        projects.</p>
                </div>
            </div>
        </section>
    )
}

function ContactUsSection() {
    return (
        <section id="contactUsSection" className="bg-black pt-32 pb-32">
            <div className="container mx-auto lg:flex lg:items-center pb-10">
                <div className="text-white xl:mr-56 space-y-3">
                    <h4 className="text-4xl font-bold">Ready to transform your college experience?</h4>
                    <p className="text-xl">Join Connectly today and discover a community of motivated students ready to
                        support your academic journey.</p>
                    <form className="space-x-5">
                        <input type="email" name="email" id="email" placeholder="Email Address"
                               className="rounded-3xl text-black m-2 w-sm bg-gray-100 px-1.5 py-1 "/>
                        <button type="submit" className="rounded-lg bg-white text-black m-2 pt-1 pb-1 pl-2 pr-2">Contact
                            Us
                        </button>
                    </form>
                </div>
                <img src={contactUsImage} className="rounded-2xl w-full mt-10"/>
            </div>
        </section>
    )
}

export default LandingPage
