"use client";

import { ReactNode, useState } from "react";
import { FaHome } from "react-icons/fa";
import NavLink from "../ui/NavLink";
import { CiClock1 } from "react-icons/ci";
import { ImProfile } from "react-icons/im";
import { CgLogIn } from "react-icons/cg";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import im from "@/app/favicon.ico";
interface NavItem {
  name: string;
  path: string;
  icon: ReactNode;
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const navItems: NavItem[] = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "All Facilities", path: "/facilities", icon: <CiClock1 /> },
  ];

  if (user) {
    navItems.push({
      name: "My Profile",
      path: "/profile",
      icon: <ImProfile />,
    });
  }

  const link = (
    <>
      {navItems.map((item, idx) => (
        <NavLink key={idx} href={item.path} icon={item.icon}>
          {item.name}
        </NavLink>
      ))}
    </>
  );

  return (
    <div className="fixed z-999 w-full bg-base-100 shadow-sm">
      <div className="container mx-auto">
        <div className="navbar bg-base-100 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {link}
              </ul>
            </div>
            <Link
              href={"/"}
              className="text-2xl font-bold flex justify-center items-center gap-1"
            >
              <Image
                src={im || "https://i.ibb.co/xqWRGMVJ/Screenshot-15.png"}
                alt=""
                width={50}
                height={50}
                className="bg-transparent"
              />{" "}
              <span>
                <span className="text-green-500">Play</span>Arena
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="relative">
                <button onClick={() => setToggle(!toggle)}>
                  <div className="avatar avatar-online">
                    <div className="w-12 rounded-full">
                      <Image
                        src={
                          user?.image ||
                          "https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                        }
                        alt="profile"
                        width={50}
                        height={50}
                        unoptimized
                      />
                    </div>
                  </div>
                </button>

                {toggle && (
                  <ul className="absolute right-0 mt-3 w-52 rounded-box bg-base-200 p-2 shadow-lg z-50">
                    <li>
                      <Link href={"/booking"}>My Bookings</Link>
                    </li>

                    <li>
                      <Link href={"/facilities/add"}>Add Facility</Link>
                    </li>

                    <li>
                      <Link href={"/facilities/manage"}>
                        Manage My Facilities
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={async () => {
                          await authClient.signOut();
                          setToggle(false);
                        }}
                        className="w-full text-left bg-red-500 text-white px-3 py-2 rounded-md"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <NavLink href={"/login"} icon={<CgLogIn />}>
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
