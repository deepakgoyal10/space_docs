import { useEffect, useState } from "react";
import { useUser } from "../lib/context/user";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const user = useUser();

  useEffect(() => {
    if (user.current) {
      navigate("/");
    }
  }, [user]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    await user.login(email, password);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    await user.register(email, password);
  };
  return (
    <section className="bg-zinc-900 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-6">Login or Register</h1>
        <form>
          <input
            className="w-full mb-4 px-4 py-3  focus:border-b  focus:outline-none focus:border-blue-600"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="w-full mb-6 px-4 py-3 focus:border-b  focus:outline-none focus:border-blue-600"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="flex justify-between items-center gap-2">
            {/* <button
              className="w-1/2 bg-indigo-500 text-white py-3 rounded hover:bg-indigo-600 transition duration-300 ease-in-out"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button> */}
            <button
              className=" w-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 font-semibold "
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className=" w-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 font-semibold "
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
