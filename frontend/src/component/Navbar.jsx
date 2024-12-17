import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import navbar from '../datas/navbar';
import { logout } from '../api/user';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
    const { userContextData, setUserContextData } = useContext(UserContext);
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    const toggleMenu = () => setShowMenu(prev => !prev);

    const handleLogOut = async () => {
        try {
            console.log(userContextData.user);
            const response = await logout(userContextData.user);
            console.log(response, "log out message");

            if (response.data.success) {
                // Clear user data in context and redirect to /login
                setUserContextData(null);
            } else {
                console.error(response.message || 'Logout failed.');
                alert(response.message || 'Logout failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during logout:', error.message);
            alert('User not logged in.');
        }
    };

    return (
        <div className="w-full">
            <div className='px-14 sticky top-0 z-50 flex justify-between items-center text-sm  bg-[#e0e0e0] shadow-md'>
                <img onClick={() => { navigate("/home") }} className='w-[80px] h-[80px] cursor-pointer ' src={"/images/logo.png"} alt="logo" />

                {/* Desktop Navbar */}
                <ul className='hidden md:flex lg:gap-14 gap-7 items-center font-medium'>
                    {navbar.map((navbarItem, index) => (
                        <NavLink
                            onClick={() => { scrollTo(0, 0); }}
                            key={index}
                            to={navbarItem.href}
                            className={({ isActive }) =>
                                clsx(
                                    "relative group cursor-pointer transition-all duration-300 ease-in-out",
                                    isActive && 'text-[#681dad]' // Change color when active
                                )
                            }
                        >
                            <li className=' hover:text-[#681dad] py-2 px-3'>
                                {navbarItem.name}
                                {/* Add the active underline div */}
                                <div
                                    className={({ isActive }) => clsx(
                                        'absolute -bottom-1  left-1/2 transform -translate-x-1/2 h-[4px] w-4/5 transition-all duration-300 ease-in-out',
                                        isActive ? 'bg-[#681dad]' : 'bg-transparent' // Underline only when active
                                    )}
                                />
                            </li>
                        </NavLink>
                    ))}
                </ul>

                {/* Desktop Profile */}
                <div className='flex items-start gap-4 md:ml-4'>
                    <div className='hidden md:flex items-center gap-2'>
                        <button
                            onClick={() => {
                                handleLogOut();
                                navigate("/login");
                                window.scrollTo(0, 0); // Scrolls to the top of the page
                            }}
                            className='text-white bg-[#8A2BE2] p-3 rounded-full hover:bg-[#9e43f3] transition-all duration-100 ease-in'
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden flex items-center justify-center text-2xl"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {showMenu ? 'X' : '☰'} {/* Display "X" when menu is open, otherwise "☰" */}
                </button>
            </div>

            {/* Mobile Navbar */}
            <div className={clsx("md:hidden flex flex-col items-center mb-5 text-white bg-[#6656ce] transition-all duration-500", showMenu ? "max-h-60 opacity-100" : "max-h-0 overflow-hidden")}>
                <ul className={clsx("cursor-pointer flex flex-col gap-4 items-center p-7")}>
                    {navbar.map((item, index) => (
                        <li
                            onClick={() => { scrollTo(0, 0); setShowMenu(false); navigate(`${item.href}`); }}
                            key={index}
                            className='py-2 px-4 transition-all duration-300 hover:bg-[#681dad] rounded-full'
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>

                {/* Profile for mobile */}
                <div className='flex items-center gap-2'>
                    <button
                        onClick={() => { handleLogOut(); navigate("/login"); }} className='text-white bg-[#681dad] py-1 px-3 rounded-full transition-all duration-300 ease-in-out'
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
