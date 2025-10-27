import usersLogo from "../../assets/Users.png";
import clockLogo from "../../assets/Clock.png";
import trendingLogo from "../../assets/Trending up.png";
import userLogo from "../../assets/User.png";

function SuggestionsSidebar() {
    return (
        <section id="recommendations" className="flex-1 min-w-sm lg:block hidden p-5 space-y-5">
            <SuggestedStudyGroups />
            <SuggestedConnections />
            <TrendingTopics />
        </section>
    );
}

function SuggestedStudyGroups() {
    const suggestedStudyGroups: SuggestedStudyGroupProps[] = [
        {
            name: "Advanced Calculus",
            members: 14,
            schedule: new Date(),
        },
        {
            name: "Computer Graphics",
            members: 12,
            schedule: new Date(),
        },
    ]

    return (
        <div id="studyGroups" className="rounded border-2 p-3 space-y-3 border-gray-200">
            <div className="flex space-x-3">
                <img src={usersLogo} alt="Study Groups Logo" className="w-8"/>
                <span className="font-semibold text-xl">Your Study Groups</span>
            </div>
            <div className="space-y-3">
                {
                    suggestedStudyGroups.map(
                        (group, i) =>
                            i == suggestedStudyGroups.length - 1
                            ? <SuggestedStudyGroup key={i} {...group}/>
                            : <><SuggestedStudyGroup key={i} {...group}/><hr className="border-gray-200"/></>
                    )
                }
            </div>
        </div>
    );
}

type SuggestedStudyGroupProps = {
    name: string,
    members: number,
    schedule: Date,
}
function SuggestedStudyGroup({ name, members, schedule }: SuggestedStudyGroupProps) {
    return (
        <div className="flex justify-between">
            <div>
                <p>{name}</p>
                <div className="flex items-center space-x-2">
                    <img src={usersLogo} alt="Users Logo" className="w-5"/>
                    <span>{members} members</span>
                </div>
                <div className="flex items-center space-x-2">
                    <img src={clockLogo} alt="Schedule Logo" className="w-5"/>
                    <span>{schedule.toDateString()}</span>
                </div>
            </div>
            <div>
                <a href="" className="rounded bg-gray-300 hover:bg-gray-400 py-1 px-1.5">Join</a>
            </div>
        </div>
    )
}

function SuggestedConnections() {
    const suggestedConnections: SuggestedConnectionProps[] = [
        {
            name: "John Doe",
            course: "B.S. Computer Science",
            year: "Freshman",
            connections: 1,
            profilePicture: userLogo,
        }
    ]
    return (
        <div id="connections" className="rounded border-2 p-3 space-y-3 border-gray-200">
            <p className="text-xl font-semibold">Suggested Connections</p>
            <div className="space-y-3">
                {
                    suggestedConnections.map(
                        (connection, i) =>
                            <SuggestedConnection key={i} {...connection}/>
                    )
                }
            </div>
        </div>
    );
}

type SuggestedConnectionProps = {
    name: string,
    course: string,
    year: string,
    connections: number,
    profilePicture: string,
}
function SuggestedConnection({ name, course, year, connections, profilePicture }: SuggestedConnectionProps) {
    return (
        <div className="flex space-x-2 justify-between">
            <div className="flex space-x-2">
                <div>
                    <img src={profilePicture} alt={`${name}'s Profile Pic`}
                         className="rounded-full aspect-square w-10"/>
                </div>
                <div>
                    <p className="text-base">{name}</p>
                    <p className="text-sm">{`${course} • ${year}`}</p>
                    <p className="text-sm">{`${connections} mutual connections`}</p>
                </div>
            </div>
            <div>
                <a href="" className="rounded bg-gray-300 hover:bg-gray-400 py-1 px-1.5">Connect</a>
            </div>
        </div>
    );
}

function TrendingTopics() {
    const trendingTopics: string[] = [
        "MMDC",
        "College Life",
        "Study Partner",
        "Studies",
        "Midterm Prep",
    ];

    return (
        <div id="trending" className="rounded border-2 p-3 space-y-3 border-gray-200">
            <div className="flex space-x-3">
                <img src={trendingLogo} alt="Trending Logo" className="w-8"/>
                <p className="text-xl font-semibold">Trending</p>
            </div>
            <>
                {
                    trendingTopics.map(
                        (topic, i) =>
                            <p>
                                <a href="" className="rounded hover:bg-gray-100 px-2 py-1" key={i}>{`#${topic}`}</a>
                            </p>
                    )
                }
            </>
        </div>
    )
}

export default SuggestionsSidebar;
