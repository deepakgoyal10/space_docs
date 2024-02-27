import { useState } from "react";
import { useUser } from "../lib/context/user";
import { useIdeas } from "../lib/context/ideas";

export function IdeaPage() {
    const user = useUser();
    const ideas = useIdeas();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="bg-zinc-500 min-h-screen flex flex-col justify-center items-center p-4">
            {/* Show the submit form to logged in users. */}
            {user.current ? (
                <section className="bg-white p-8 rounded-md shadow-md mb-4">
                    <h2 className="text-2xl font-semibold mb-4">Submit Idea</h2>
                    <form>
                        <input
                            className="w-full mb-4 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}
                        />
                        <textarea
                            className="w-full mb-4 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                            placeholder="Description"
                            value={description}
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}
                        />
                        <button
                            className="w-full bg-indigo-500 text-white py-3 rounded hover:bg-indigo-600 transition duration-300"
                            type="button"
                            onClick={() =>
                                ideas.add({ userId: user.current.$id, title, description })
                            }
                        >
                            Submit
                        </button>
                    </form>
                </section>
            ) : (
                <section>
                    <p>Please login to submit an idea.</p>
                </section>
            )}
            <section className="bg-white p-8 rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Latest Ideas</h2>
                <ul>
                    {ideas.current.map((idea) => (
                        <li key={idea.$id} className="mb-4">
                            <strong className="text-lg">{idea.title}</strong>
                            <p className="mt-2 mb-4">{idea.description}</p>
                            {/* Show the remove button to idea owner. */}
                            {user.current && user.current.$id === idea.userId && (
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                                    type="button"
                                    onClick={() => ideas.remove(idea.$id)}
                                >
                                    Remove
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
export default IdeaPage