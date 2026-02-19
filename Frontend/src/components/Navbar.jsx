import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

 

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className="bg-neutral-950 text-white shadow-md sticky top-0 z-50">
                <div className="max-w-3/4  mx-auto py-6 px-4 flex justify-between items-center ">
                    <div className="text-4xl font-bold">
                        <NavLink to="/">WeAnalyz</NavLink>
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
                            <li className="hover:text-blue-600">
                                <NavLink to="/login">LogIn</NavLink>

                            </li>
                            <li className="hover:text-blue-600">
                                <NavLink to="/register">Register</NavLink>

                            </li>
                        </ul>
                    </nav>

                    {/* mobile menu button */}

                    <button
                        className="md:hidden text-2xl text-white"
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
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register">Register</NavLink>
                            </li>
                        </ul>
                    </div>
                }
            </header>
        </>
    );
}

export default Navbar;
