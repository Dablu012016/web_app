import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { useAuth } from "../store/auth";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { isLoggedIn } = useAuth();
    return (
        <>
            <header className=" bg-white/90 shadow-md sticky top-0 z-50">
                <div className="max-w-3/4  mx-auto  px-2 flex justify-between items-center ">
                    <div>
                        <NavLink to="/">
                        {/* <img src="./images/logo.png" height={100} width={200} alt="main logo" /> */}
                        <h1 className="text-4xl font-bold p-6 text-blue-900">We<span className="text-blue-500">Analyze</span></h1>
                        </NavLink>
                    </div>

                    {/* desktop menu  */}
                    <nav>
                        <ul className="hidden md:flex gap-10 text-2xl font-medium list-none">
                            <li className="hover:text-blue-600">
                                <NavLink to="/" >Home</NavLink>
                            </li>
                            <li className="hover:text-blue-600">
                                <NavLink to="/about">About</NavLink>

                            </li>
                            <li className="hover:text-blue-600">
                                <NavLink to="/services">Services</NavLink>

                            </li>
                            <li className="hover:text-blue-600">
                                <NavLink to="/contact">Contact</NavLink>

                            </li>
                            {
                                isLoggedIn ?
                                    (
                                        <li className="hover:text-blue-600">
                                            <NavLink to="/logout">LogOut</NavLink>

                                        </li>
                                    ) : (
                                        <>
                                            <li className="hover:text-blue-600">
                                                <NavLink to="/login">LogIn</NavLink>

                                            </li>
                                            <li className="hover:text-blue-600">
                                                <NavLink to="/register">Register</NavLink>

                                            </li>
                                        </>
                                    )
                            }

                        </ul>
                    </nav>

                    {/* mobile menu button */}

                    <button
                        className="md:hidden text-4xl "
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* mobile menu  */}

                {
                    open && <div className="md:hidden text-2xl font-medium mx-5 py-4 ">
                        <ul className="flex flex-col gap-4 list-none">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/services">Services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            {
                                isLoggedIn ?
                                    (
                                        <li>
                                            <NavLink to="/logout">LogOut</NavLink>
                                        </li>
                                    ) : (
                                        <>
                                            <li>
                                                <NavLink to="/login">Login</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/register">Register</NavLink>
                                            </li>
                                        </>
                                    )
                            }

                        </ul>
                    </div>
                }
            </header >
        </>
    );
}

export default Navbar;
