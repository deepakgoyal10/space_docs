import { useState } from "react";
import { useUser } from "../lib/context/user";

export function Login() {
    const user = useUser();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        user.login(email, password)
    };
    const handleRegister = () => {
        user.register(email, password)
    };
    return (
        <section className="bg-zinc-400 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
                <h1 className="text-3xl font-semibold mb-6">Login or Register</h1>
                <form>
                    <input
                        className="w-full mb-4 px-4 py-3 rounded border-gray-300 focus:outline-none focus:border-indigo-500"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        className="w-full mb-6 px-4 py-3 rounded border-gray-300 focus:outline-none focus:border-indigo-500"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <div className="flex justify-between items-center">
                        <button
                            className="w-1/2 bg-indigo-500 text-white py-3 rounded hover:bg-indigo-600 transition duration-300 ease-in-out"
                            type="button"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                        <button
                            className="w-1/2 bg-gray-300 text-gray-700 py-3 rounded hover:bg-gray-400 transition duration-300 ease-in-out"
                            type="button"
                            onClick={handleRegister}
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );

}
