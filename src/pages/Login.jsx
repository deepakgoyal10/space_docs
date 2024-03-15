import { useEffect, useState } from "react";
import { useUser } from "../lib/context/user";
import { useNavigate } from "react-router-dom";
import { useDocs } from "../lib/context/docs";
import { motion } from "framer-motion";

export function Login() {
  const navigate = useNavigate();
  const user = useUser();
  const docs = useDocs();
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
    const userId = user?.current;
    console.log("userID", userId);
    if (userId) {
      console.log("inloigin if condition");
      await docs.getDocs(userId);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    await user.register(email, password);
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className=" absolute top-0 left-0 bg-gradient-to-b from-zinc-800 via-gray-900 to-blue-950 bottom-0 leading-5 h-full w-full overflow-hidden">
      <div className="relative min-h-screen flex flex-col-reverse  sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl gap-8">
        <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
          <div className=" text-center sm:text-left sm:self-start flex flex-col text-gray-300">
            <motion.h1
              initial={{ y: -450, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="my-3 font-bold text-xl sm:text-4xl "
            >
              Enhance Your Productivity with Space Docs.
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="pr-3 text-sm opacity-75"
            >
              Welcome to Space Docs, your ultimate productivity companion. Say
              goodbye to scattered notes and hello to seamless organization.
              With Space Docs
            </motion.p>
          </div>
        </div>
        <div className=" flex justify-center self-center z-10">
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "circOut", duration: 0.75, delay: 0.2 }}
            className="p-12 bg-white mx-auto rounded-3xl w-[90%] sm:w-96"
          >
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">
                Hey Welcome !!
              </h3>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  className="w-full mb-4 px-4 py-3  border-b border-gray-400 focus:outline-none focus:border-blue-600"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  className="w-full mb-6 px-4 py-3 border-b border-gray-400 focus:outline-none focus:border-blue-600"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                {user.invalidCredentials && (
                  <div className="flex items-center justify-center">
                    <div className="text-sm">
                      <p className="text-red-500">Invalid Credentials!!</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex  gap-4">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 font-semibold w-full"
                  type="button"
                  onClick={handleLogin}
                >
                  Sign in
                </button>
                <button
                  type="button"
                  onClick={handleRegister}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 font-semibold w-full"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 sm:bottom-[-100px] left-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
