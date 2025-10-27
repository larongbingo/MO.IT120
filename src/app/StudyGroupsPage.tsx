import { useState } from 'react'

interface StudyGroup {
    id: number
    name: string
    subject: string
    members: number
    maxMembers: number
    description: string
    nextMeeting?: string
}

function StudyGroupsPage() {
    const [searchQuery, setSearchQuery] = useState('')

    const studyGroups: StudyGroup[] = [
        {
            id: 1,
            name: "Calculus Study Circle",
            subject: "Mathematics",
            members: 8,
            maxMembers: 12,
            description: "Weekly sessions for Calculus I students. We focus on problem-solving and exam prep.",
            nextMeeting: "Tomorrow at 3 PM"
        },
        {
            id: 2,
            name: "Python Programmers",
            subject: "Computer Science",
            members: 15,
            maxMembers: 20,
            description: "Learning Python together through projects and coding challenges.",
            nextMeeting: "Friday at 5 PM"
        },
        {
            id: 3,
            name: "Chemistry Lab Partners",
            subject: "Chemistry",
            members: 6,
            maxMembers: 10,
            description: "Collaborative group for Chemistry 101. We meet before labs to review procedures.",
            nextMeeting: "Monday at 2 PM"
        },
        {
            id: 4,
            name: "Literature Discussion",
            subject: "English",
            members: 10,
            maxMembers: 15,
            description: "Deep dives into course readings and literary analysis.",
            nextMeeting: "Wednesday at 4 PM"
        },
        {
            id: 5,
            name: "Physics Problem Solvers",
            subject: "Physics",
            members: 12,
            maxMembers: 15,
            description: "Tackling tough physics problems together. All levels welcome!",
            nextMeeting: "Thursday at 6 PM"
        }
    ]

    const filteredGroups = studyGroups.filter(group =>
        group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Study Groups</h1>
                <p className="text-gray-600">Find and join study groups that match your interests</p>
            </div>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search by name, subject, or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border bg-gray-50 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" />
            </div>

            <div className="space-y-4">
                {filteredGroups.length === 0
                    ? <div className="text-center py-12 text-gray-500">No study groups found matching your search.</div>
                    : filteredGroups.map(group => <StudyGroupCard group={group} />)
                }
            </div>
        </div>
    )
}

function StudyGroupCard({ group }: { group: StudyGroup }) {
    return (
        <div key={group.id} className="border border-gray-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h3 className="text-lg font-semibold">{group.name}</h3>
                    <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded mt-1">
                                        {group.subject}
                                    </span>
                </div>
                <div className="text-right text-sm text-gray-600">
                    <div>{group.members}/{group.maxMembers} members</div>
                </div>
            </div>

            <p className="text-gray-700 mb-3">{group.description}</p>

            {group.nextMeeting && (
                <div className="text-sm text-gray-600 mb-3">
                    📅 Next meeting: {group.nextMeeting}
                </div>
            )}

            <button
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                disabled={group.members >= group.maxMembers}>
                {group.members >= group.maxMembers ? 'Full' : 'Join Group'}
            </button>
        </div>
    )
}

export default StudyGroupsPage