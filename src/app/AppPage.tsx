import profilePicture from "../assets/profile pic.png";
import photo from "../assets/Photo.png";
import calendar from "../assets/Calendar.png";
import heart from "../assets/Heart.png";
import messageBubble from "../assets/MessageBubble.png";
import share from "../assets/Share.png";
import userPhoto from "../assets/User.png";

function AppPage() {
    return (
        <main className="flex-1 mx-auto flex xl:container xl:mx-auto">
            <div className="p-5 w-full space-y-5">
                <AddPostForm/>
                <Posts />
            </div>
        </main>
    )
}

function AddPostForm() {
    return (
        <form action="" id="createPost" className="rounded-2xl border-2 border-gray-200 p-4 flex space-x-3">
            <div>
                <img src={profilePicture} alt="Profile Picture" className="rounded-full w-14"/>
            </div>
            <div className="w-full space-y-5">
                        <textarea name="Message" id="Message" rows={5}
                                  placeholder="Share an update, ask for study help, or connect with fellow students..."
                                  className="flex-1 rounded-xl w-full border-1 bg-gray-50 border-gray-200 p-3"></textarea>
                <hr className="border-gray-200 border-1"/>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                        <a href="" className="flex items-center space-x-3 rounded hover:bg-gray-300 px-2 py-1">
                            <img src={photo} alt="Photo Logo" className="w-5"/>
                            <span>Photo</span>
                        </a>
                        <a href="" className="flex items-center space-x-3 rounded hover:bg-gray-300 px-2 py-1">
                            <img src={calendar} alt="Event Logo" className="w-5"/>
                            <span>Event</span>
                        </a>
                    </div>
                    <button type="submit"
                            className="rounded bg-gray-500 hover:bg-gray-600 px-3 py-1 text-white">Post
                    </button>
                </div>
            </div>
        </form>
    )
}

interface User {
    name: string,
    course: string,
    year?: string | undefined,
    profilePicture?: string | undefined,
    affiliation: string,
}
interface PostProps {
    id: number,
    user: User,
    post: string,
    image?: string | undefined,
    likes: number,
    comments: number,
    datePosted: Date,
}
function Post({ user, post, image, likes, comments, datePosted }: PostProps) {
    return (
        <div className="rounded-2xl border-2 p-4 space-y-7 border-gray-200">
            <div className="flex space-x-3">
                <div>
                    <img src={user.profilePicture ? user.profilePicture : userPhoto} alt={`${user.name} Profile Picture`} className="aspect-square rounded-full w-14"/>
                </div>
                <div>
                    <div className="flex space-x-3">
                        <p className="font-semibold text-xl">{user.name}</p>
                        <span className="px-2 py-0.5 rounded bg-gray-100">{user.affiliation}</span>
                    </div>
                    {
                        user.year
                            ? <p>{`${user.course} • ${user.year} • ${datePosted.toDateString()}`}</p>
                            : <p>{`${user.course} • ${datePosted.toDateString()}`}</p>
                    }
                </div>
            </div>
            <p>{post}</p>
            { image && <div className="flex items-center w-full"><img src={image} alt="Post Image" className="rounded-xl w-full lg:w-1/2"/></div> }
            <hr className="border-gray-200"/>
            <div className="space-x-5 pb-3 px-3 flex">
                <a href="" className="flex items-center space-x-4 rounded px-2 py-1 hover:bg-gray-100">
                    <div><img src={heart} alt="Like" className="w-5"/></div>
                    <span>{likes}</span>
                </a>

                <a href="" className="flex items-center space-x-4 rounded px-2 py-1 hover:bg-gray-100">
                    <div><img src={messageBubble} alt="Comment" className="w-5"/></div>
                    <span>{comments}</span>
                </a>

                <a href="" className="flex items-center space-x-4 rounded px-2 py-1 hover:bg-gray-100">
                    <div><img src={share} alt="Share" className="w-5"/></div>
                    <span>Share</span>
                </a>

            </div>
        </div>
    );
}

function Posts() {
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
        {
            id: 2,
            user: { name: "Sarah Martinez", course: "Business Administration", year: "3rd Year", profilePicture: "https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?cs=srgb&dl=pexels-olly-3767392.jpg&fm=jpg", affiliation: "Student" },
            post: "Does anyone have notes from last week's Marketing 301 lecture? I had to miss class due to a medical appointment. Would really appreciate any help!",
            likes: 23,
            comments: 12,
            datePosted: new Date()
        },
        {
            id: 3,
            user: { name: "Dr. James Chen", course: "Physics Department", profilePicture: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-olly-762020.jpg&fm=jpg", affiliation: "Faculty" },
            post: "Reminder: Office hours this Thursday will be moved to Friday 2-4 PM due to the department meeting. See you all then!",
            likes: 45,
            comments: 8,
            datePosted: new Date()
        },
        {
            id: 4,
            user: { name: "Alex Thompson", course: "Mechanical Engineering", year: "2nd Year", profilePicture: "https://images.pexels.com/photos/3777570/pexels-photo-3777570.jpeg?cs=srgb&dl=pexels-olly-3777570.jpg&fm=jpg", affiliation: "Student" },
            post: "Just finished my first CAD project! It took me way longer than expected but I'm really proud of the result. Shoutout to the study group for helping me debug those dimension errors 🙌",
            likes: 67,
            comments: 19,
            datePosted: new Date()
        },
        {
            id: 5,
            user: { name: "Emily Rodriguez", course: "Biology", year: "4th Year", profilePicture: userPhoto, affiliation: "Student" },
            post: "Looking for lab partners for the Molecular Biology research project next semester. Interested in genetic engineering and CRISPR applications. DM me if you want to collaborate!",
            likes: 34,
            comments: 27,
            datePosted: new Date()
        },
        {
            id: 6,
            user: { name: "Michael Park", course: "Graphic Design", year: "1st Year", affiliation: "Student" },
            post: "Can anyone recommend good resources for learning Adobe Illustrator? I'm struggling with the pen tool and bezier curves. Any tutorials or tips would be amazing!",
            likes: 89,
            comments: 43,
            datePosted: new Date()
        },
        {
            id: 7,
            user: { name: "Prof. Lisa Anderson", course: "English Literature", affiliation: "Faculty" },
            post: "Excited to announce our department's upcoming Poetry Slam event on March 15th! Open to all students. Prizes for top 3 performers. Sign up at the Student Center by March 10th. Let's celebrate creativity together!",
            likes: 156,
            comments: 52,
            datePosted: new Date()
        },
    ];

    return (
        <div className="space-y-5">
            {posts.map((post, _) => (
                <Post key={post.id} {...post}/>
            ))}
        </div>
    )
}


export default AppPage;