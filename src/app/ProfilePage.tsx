import profilePicture from "../assets/profile pic.png";
import calendarIcon from "../assets/Calendar.png";
import Posts from "./components/Post";
import type { PostProps } from "./components/Post";
import userPhoto from "../assets/User.png";
import { useAuth0 } from "@auth0/auth0-react";
import { getConnectlyProfile, type ConnectlyUser } from "../api";
import { useEffect, useState } from "react";

type Course = { code: string; title: string; instructor?: string };
type StudyGroup = { id: number; name: string; meeting: string };
type EventItem = { id: number; title: string; time: string };

export default function ProfilePage() {
    const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();
    const [ fetchedProfile, setFetchedProfile ] = useState<ConnectlyUser>();

    useEffect(() => {
        const callApi = async () => {
            if (isAuthenticated) {
                const token = await getAccessTokenSilently()
                const response = await getConnectlyProfile(token)
                setFetchedProfile(response)
                console.log(response)
            }
        }

        callApi()
    }, [isAuthenticated])


    const profile = {
        name: fetchedProfile?.firstName + " " + fetchedProfile?.lastName,
        handle: "@" + fetchedProfile?.displayName,
        university: fetchedProfile?.school,
        major: fetchedProfile?.major,
        year: fetchedProfile?.year,
        gpa: "3.8",
        bio: fetchedProfile?.title,
    };

    const courses: Course[] = [
        { code: "CS301", title: "Operating Systems", instructor: "Dr. Patel" },
        { code: "CS250", title: "Data Structures", instructor: "Prof. Nguyen" },
        { code: "MATH210", title: "Linear Algebra", instructor: "Dr. Alvarez" },
    ];

    const studyGroups: StudyGroup[] = [
        { id: 1, name: "OS Study Group", meeting: "Tue 6:00 PM - Library 402" },
        { id: 2, name: "Algorithms Review", meeting: "Thu 5:00 PM - Zoom" },
    ];

    const events: EventItem[] = [
        { id: 1, title: "Project Sync — CS301", time: "Today, 3:00 PM" },
        { id: 2, title: "Math Problem Solving", time: "Fri, 11:00 AM" },
    ];

    const posts: PostProps[] = [
        {
            id: 1,
            user: { name: "Renz Pagulayan", course: "Computer Science", profilePicture: userPhoto, affiliation: "Faculty" },
            post: "I'm excited to share that I'm joining the Connectly team this summer! I'm looking forward to working with talented individuals and collaborating on exciting projects. Let's connect and make this a great summer!",
            likes: 10,
            image: "https://images.pexels.com/photos/34364458/pexels-photo-34364458.jpeg?cs=srgb&dl=pexels-opticaltimeline-34364458.jpg&fm=jpg",
            comments: 5,
            datePosted: new Date()
        },
    ]

    return (
        <main className="w-full min-h-screen bg-white text-gray-800">
            <div className="max-w-5xl mx-auto p-6">
                {/* Header */}
                <section className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                        <img
                            src={user?.picture}
                            alt="Profile"
                            className="w-28 h-28 rounded-full object-cover border border-gray-200"
                        />
                    </div>

                    <div className="flex-1 w-full">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                            <div>
                                <h2 className="text-2xl font-semibold">{profile.name}</h2>
                                <div className="text-sm text-gray-500">{profile.handle} • {profile.university}</div>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-700 max-w-2xl">{profile.bio}</p>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-md text-sm">
                                Major: <span className="font-medium ml-1">{profile.major}</span>
                            </div>
                            <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-md text-sm">
                                Year: <span className="font-medium ml-1">{profile.year}</span>
                            </div>
                            <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-md text-sm">
                                GPA: <span className="font-medium ml-1">{profile.gpa}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grid: Courses / Study Groups / Schedule */}
                <section className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Courses */}
                    <div className="col-span-1 lg:col-span-2 bg-white border border-gray-100 rounded-2xl p-5">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Enrolled Courses</h3>
                            <span className="text-sm text-gray-500">{courses.length} courses</span>
                        </div>

                        <ul className="space-y-3">
                            {courses.map((c) => (
                                <li key={c.code} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100">
                                    <div>
                                        <div className="font-medium">{c.code} • {c.title}</div>
                                        <div className="text-sm text-gray-500">{c.instructor}</div>
                                    </div>
                                    <div className="text-sm text-gray-400">Credits</div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4 flex items-center justify-end">
                            <button className="text-sm px-3 py-2 border border-gray-200 rounded-md hover:bg-gray-50">
                                View All Courses
                            </button>
                        </div>
                    </div>

                    {/* Sidebar: Study Groups & Schedule */}
                    <aside className="space-y-6">
                        <div className="bg-white border border-gray-100 rounded-2xl p-4">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="font-medium">Study Groups</h4>
                                <span className="text-xs text-gray-400">{studyGroups.length}</span>
                            </div>
                            <ul className="space-y-2">
                                {studyGroups.map(g => (
                                    <li key={g.id} className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                                        <div className="font-medium">{g.name}</div>
                                        <div className="text-sm text-gray-500">{g.meeting}</div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-3">
                                <button className="w-full text-sm px-3 py-2 border border-gray-200 rounded-md hover:bg-gray-50">Join or Create Group</button>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-100 rounded-2xl p-4">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <img src={calendarIcon} alt="Calendar" className="w-4 h-4" />
                                    <h4 className="font-medium">Upcoming</h4>
                                </div>
                                <span className="text-xs text-gray-400">Next 7 days</span>
                            </div>

                            <ul className="space-y-2">
                                {events.map(ev => (
                                    <li key={ev.id} className="flex items-start gap-3">
                                        <div className="mt-1 h-8 w-8 rounded-md bg-gray-50 border border-gray-100 flex items-center justify-center text-xs text-gray-600">
                                            {ev.title.split(" ").slice(0, 1).join("").slice(0, 1)}
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm">{ev.title}</div>
                                            <div className="text-xs text-gray-500">{ev.time}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-3">
                                <button className="w-full text-sm px-3 py-2 border border-gray-200 rounded-md hover:bg-gray-50">Manage Calendar</button>
                            </div>
                        </div>
                    </aside>
                </section>


                {/* Your Posts */}
                <section className="mt-6 bg-white border border-gray-100 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Your Posts</h3>
                        <span className="text-sm text-gray-500">Recent activity</span>
                    </div>

                    <div className="space-y-5">
                        <Posts posts={posts} />
                    </div>
                </section>
            </div>
        </main>
    );
}