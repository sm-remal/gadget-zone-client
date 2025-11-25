'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { BsBoxSeamFill } from "react-icons/bs";
import { MdAddToPhotos } from "react-icons/md";
import { BiSolidWalletAlt } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
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
        router.push("/login"); // redirect home
      })
      .catch((err) => {
        const errorMessage = err.message;
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
        {/* Mobile menu icon */}
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/all-products"}>All Products</Link></li>
            <li><Link href={"/about"}>About Us</Link></li>
            <li><Link href={"/contact"}>Contact</Link></li>
          </ul>
        </div>

        {/* Logo */}
        <Link href={"/"} className="flex items-center -ml-3 md:ml-0 gap-1 text-lg sm:text-xl font-bold whitespace-nowrap">
          <span className="truncate max-w-[130px] sm:max-w-none">
            Gadget Zone
          </span>
        </Link>
      </div>

      {/* Navbar Center (desktop) */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li>
            <Link href={"/"} className={isActive("/")}>
              <GoHomeFill /> Home
            </Link>
          </li>
          <li>
            <Link href={"/all-products"} className={isActive("/all-products")}>
              <BsBoxSeamFill size={12} />All Products
            </Link>
          </li>
          <li>
            <Link href={"/about"} className={isActive("/about")}>
              <MdManageAccounts size={20}/>About Us
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className={isActive("/contact")}>
              <BiSolidContact size={14} />Contact
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
                <Link href={"/my-profile"}><FaUser /> Profile</Link>
              </li>
              <li>
                <Link href={"/add-product"}><MdAddToPhotos />Add Product</Link>
              </li>
              <li>
                <Link href={"/manage-products"}><BiSolidWalletAlt />Manage Products</Link>
              </li>
              <li>
                <a><FaGear /> Settings</a>
              </li>
              <li>
                <button onClick={handleSignout} className="btn btn-xs text-left bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white">
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link href={"/login"} className="btn rounded-full border-gray-300 btn-sm bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white">
            <IoLogIn /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
