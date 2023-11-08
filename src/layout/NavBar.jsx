import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)


    console.log(user);

    const handleLogout = () => {

        logOut()
            .then(toast.success('Successfully LogOut Complete ',
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }))
    }

    const links = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'btn btn-outline text-black btn-sm' : ''}>Home</NavLink></li>
        <li><NavLink to='/rooms' className={({ isActive }) => isActive ? 'btn btn-outline text-black  btn-sm' : ''}>Rooms</NavLink></li>
        <li><NavLink to='/roomBookings' className={({ isActive }) => isActive ? 'btn btn-outline text-black btn-sm' : ''}>My Bookings</NavLink></li>
        <li><NavLink to='/aboutUs' className={({ isActive }) => isActive ? 'btn btn-outline text-black btn-sm' : ''}>About Us</NavLink></li>
        <li><NavLink to='/gallery' className={({ isActive }) => isActive ? 'btn btn-outline text-black btn-sm' : ''}>Gallery</NavLink></li>


    </>
    return (
        <div >
            <div className=" bg-accent text-black">
                <div className="navbar max-w-[1500px] mx-auto py-5">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    links
                                }
                                 {
                            user ?
                                <div className="space-y-3">
                                   <div className="flex items-center gap-3">
                                     <img className="w-12 rounded-full" src={user.photoURL}alt="" />
                                    <p className="capitalize text-lg"> {user.displayName}</p>
                                   </div>
                                    <button onClick={handleLogout} className="btn btn-outline text-black w-full">logout</button>

                                </div> :
                                <Link to='/login' className="btn btn-outline text-black w-full">login</Link>
                        }
                            </ul>
                        </div>
                        <img className="w-14" src="https://i.ibb.co/G31KM8p/review.png" alt="" />
                        <a className="btn btn-ghost normal-case text-sm md:text-xl">Seaside Haven Hotel & Spa</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-black">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ?
                                <div className="hidden lg:flex items-center space-x-3">
                                    <img className="w-12 rounded-full" src={user.photoURL}alt="" />
                                    <p className="capitalize text-lg"> {user.displayName}</p>
                                    <button onClick={handleLogout} className="btn btn-outline text-black">logout</button>

                                </div> :
                                <Link to='/login' className="btn btn-outline text-black">login</Link>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;