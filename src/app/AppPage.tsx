import React, { useRef, useState } from "react";
import profilePicture from "../assets/profile pic.png";
import photoIcon from "../assets/Photo.png";
import calendar from "../assets/Calendar.png";
import Posts, { defaultPosts, type PostProps } from "./components/Post";
import SuggestionsSidebar from "./components/SuggestionsSidebar.tsx";
import { useAuth0 } from "@auth0/auth0-react";

function AppPage() {
    const [posts, setPosts] = useState<PostProps[]>(defaultPosts);

    const handleAddPost = (content: string, imageBase64?: string) => {
        const newPost: PostProps = {
            id: Date.now(),
            user: {
                name: "You",
                course: "Student",
                profilePicture: profilePicture,
                affiliation: "You"
            },
            post: content,
            image: imageBase64,
            likes: 0,
            comments: 0,
            datePosted: new Date()
        };
        setPosts(prev => [newPost, ...prev]);
    };

    return (
        <main className="w-4xl container mx-auto">
            <div className="p-5 w-full space-y-5">
                <AddPostForm onAdd={handleAddPost}/>
                <Posts posts={posts} />
            </div>
        </main>
    )
}

function AddPostForm({ onAdd }: { onAdd: (content: string, imageBase64?: string) => void }) {
    const { user } = useAuth0();
    const [content, setContent] = useState("");
    const [imageBase64, setImageBase64] = useState<string | undefined>(undefined);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const openFilePicker = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result as string;
            setImageBase64(result);
        };
        reader.readAsDataURL(file);
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim() && !imageBase64) return;
        onAdd(content.trim(), imageBase64);
        setContent("");
        setImageBase64(undefined);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <form onSubmit={submit} id="createPost" className="rounded-2xl border-2 border-gray-200 p-4 flex space-x-3 bg-white">
            <div>
                <img src={user?.picture} alt="Profile Picture" className="rounded-full w-14"/>
            </div>
            <div className="w-full space-y-3">
                <textarea name="Message" id="Message" rows={4}
                          value={content}
                          onChange={e => setContent(e.target.value)}
                          placeholder="Share an update, ask for study help, or connect with fellow students..."
                          className="flex-1 rounded-xl w-full border-1 bg-gray-50 border-gray-200 p-3"></textarea>

                {imageBase64 && (
                    <div className="rounded-md overflow-hidden border border-gray-200">
                        <img src={imageBase64} alt="Preview" className="w-full object-cover" />
                    </div>
                )}

                <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-4">
                        <button type="button" onClick={openFilePicker} className="flex items-center space-x-3 rounded hover:bg-gray-300 px-2 py-1">
                            <img src={photoIcon} alt="Photo Logo" className="w-5"/>
                            <span>Photo</span>
                        </button>
                        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                        <button type="button" className="flex items-center space-x-3 rounded hover:bg-gray-300 px-2 py-1">
                            <img src={calendar} alt="Event Logo" className="w-5"/>
                            <span>Event</span>
                        </button>
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