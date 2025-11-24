'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaGear, FaUser } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, signOutUser } = useAuth();
  const [error, setError] = useState("");
  const router = useRouter();

  // Sign Out Function
  const handleSignout = () => {
    signOutUser()
      .then(() => {
        toast.success("Signout successful!", { id: "signout" });
        router.push("/"); // redirect home
      })
      .catch((err) => {
        const errorMessage = err.message; // simple error
        setError(errorMessage);
        toast.error(errorMessage, { id: "login" });
      });
  };

  // Active link style
  const isActive = (path) => router.pathname === path ? "text-pink-600 font-bold" : "";

  return (
    <div className="navbar py-0 min-h-0 shadow-sm max-w-7xl mx-auto w-full px-3 sm:px-6">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center gap-2">
        {/* Logo */}
        <Link href={"/"} className="flex items-center -ml-3 md:ml-0 gap-1 text-lg sm:text-xl font-bold whitespace-nowrap">
          <span className="truncate max-w-[130px] sm:max-w-none">
            Gadget Zone
          </span>
        </Link>
      </div>

      {/* Navbar Center (hidden on mobile) */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li>
            <Link href={"/"} className={isActive("/")}>
              <GoHomeFill /> Home
            </Link>
          </li>
          <li>
            <Link href={"/all-products"} className={isActive("/all-products")}>
               All Products
            </Link>
          </li>
          <li>
            <Link href={"/about"} className={isActive("/about")}>
               About Us
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className={isActive("/contact")}>
               Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2 sm:gap-3">
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="User avatar" referrerPolicy="no-referrer" src={user?.photoURL || 
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                />
              </div>
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-1 md:mt-3 -mr-2 md:-mr-4 w-52 p-2 shadow">
              <div className="pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              <li className="mt-3">
                <Link href={"/profile"}><FaUser /> Profile</Link>
              </li>
              <li>
                <Link href={"/my-models"}>My Models</Link>
              </li>
              <li>
                <Link href={"/my-downloads"}>My Downloads</Link>
              </li>
              <li>
                <a><FaGear /> Settings</a>
              </li>
              <li>
                <button onClick={handleSignout} className="btn btn-xs text-left bg-gradient-to-r from-pink-500 to-red-500 text-white">
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link href={"/login"} className="btn rounded-full border-gray-300 btn-sm bg-gradient-to-r from-pink-500 to-red-500 text-white">
            <IoLogIn /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
