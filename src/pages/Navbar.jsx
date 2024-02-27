import { useUser } from "../lib/context/user";
import { CiCirclePlus } from "react-icons/ci";
function Navbar() {
    const user = useUser();

    return (
        // <nav className="bg-sky-500">
        //     <a href="/">Idea tracker</a>
        //     <div>
        //         {user.current ? (
        //             <>
        //                 <span>{user.current.email}</span>
        //                 <button type="button" onClick={() => user.logout()}>
        //                     Logout
        //                 </button>
        //             </>
        //         ) : (
        //             <a href="/login">Login</a>
        //         )}
        //     </div>
        // </nav>
        <nav className="bg-zinc-800 py-4 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <a to="/" className="text-white text-3xl font-bold m-3 ">Space Docs.</a>
                </div>
                <div className="flex items-center gap-8 mx-5">
                    <ul className="flex space-x-4 
                    ">

                        <li>
                            <a href="/" className="text-gray-300 hover:text-white transition duration-300 cursor-pointer font-semibold">Documents</a></li>
                    </ul>
                    {user.current ? (
                        <>

                            <a onClick={() => user.logout()} className="  text-gray-300 hover:text-white transition duration-300 font-semibold">Logout</a>
                        </>
                    ) : (
                        <a to="/login" className="text-gray-300 hover:text-white transition duration-300">Login</a>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar