import { Link } from "react-router-dom";
import { useUser } from "../lib/context/user";
import { CiCirclePlus } from "react-icons/ci";
import { easeInOut, motion } from "framer-motion";

const Navbar = () => {
  const user = useUser();

  return (
    <motion.nav
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="bg-zinc-800 py-4 z-10"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div></div>
          <Link to="/" className="text-white text-3xl font-bold m-3">
            Space Docs.
          </Link>
        </div>
        <div className="flex items-center gap-8 mx-5">
          <ul
            className="flex space-x-4 
                    "
          >
            <li>
              <a
                href="/"
                className="text-gray-300 hover:text-white transition duration-300 cursor-pointer font-semibold"
              >
                Documents
              </a>
            </li>
          </ul>
          {user.current ? (
            <>
              <a
                onClick={() => user.logout()}
                className="  text-gray-300 hover:text-white transition duration-300 font-semibold cursor-pointer"
              >
                Logout
              </a>
            </>
          ) : (
            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition duration-300 cursor-pointer"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
