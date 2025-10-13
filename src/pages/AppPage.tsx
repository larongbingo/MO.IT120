import profilePicture from "/profile pic.png";
import photo from "/Photo.png";
import calendar from "/Calendar.png";

function AppPage() {
    return (
        <main className="flex-1 mx-auto flex xl:container xl:mx-auto">
            <div className="p-5 w-full space-y-5">
                <AddPostForm/>
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


export default AppPage;