import profilePicture from "/profile pic.png";
import photo from "/Photo.png";
import calendar from "/Calendar.png";
import heart from "/Heart.png";
import messageBubble from "/MessageBubble.png";
import share from "/Share.png";
import user from "/User.png";

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
    year: string | undefined,
    profilePicture: string,
    affiliation: string,
}
interface PostProps {
    id: number,
    user: User,
    post: string,
    image: string | undefined,
    likes: number,
    comments: number,
    datePosted: Date,
}
function Post({ user, post, image, likes, comments, datePosted }: PostProps) {
    return (
        <div className="rounded-2xl border-2 p-4 space-y-7 border-gray-200">
            <div className="flex space-x-3">
                <div>
                    <img src={user.profilePicture} alt={`${user.name} Profile Picture`} className="aspect-square rounded-full w-14"/>
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
            user: { name: "Renz Pagulayan", course: "Computer Science", profilePicture: user, affiliation: "Faculty" },
            post: "I'm excited to share that I'm joining the Connectly team this summer! I'm looking forward to working with talented individuals and collaborating on exciting projects. Let's connect and make this a great summer!",
            likes: 10,
            comments: 5,
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