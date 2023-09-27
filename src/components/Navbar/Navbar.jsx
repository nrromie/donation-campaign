
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const active = "text-lg text-[#FF444A] underline";

    const handleActive = ({ isActive, isPending }) => isActive ? active : isPending ? "pending" : "text-lg"

    const Links = <>
        <li><NavLink to="/" className={handleActive}>Home</NavLink></li>
        <li><NavLink to="/Donation" className={handleActive}>Donation</NavLink></li>
        <li><NavLink to="/Statistics" className={handleActive}>Statistics</NavLink></li>
    </>
    return (
        <div className="navbar h-[190px] bg-base-100 w-10/12 mx-auto">
            <div className="navbar-start">
                <img className="h-16" src="https://i.ibb.co/cYMkqH0/Logo.png" alt="Logo" />
            </div>
            <div className="navbar-end">
            <div className="hidden md:flex lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ml-[-150px]">
                    {Links}
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Navbar;