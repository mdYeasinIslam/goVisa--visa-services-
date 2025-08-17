"use client";
import React, { useState, useCallback } from "react";
import logo from "../../../public/logo.png";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/visa-services", label: "Visa-Services" },
  { href: "/my-application", label: "My-Application" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const user = { email: "h@gamil.com" };

const Navbar: React.FC = React.memo(() => {
  const [show, setShow] = useState(false);
  const pathName = usePathname()
  const handleToggleMenu = useCallback(() => setShow((prev) => !prev), []);
  const handleCloseMenu = useCallback(() => setShow(false), []);

  const signOut = useCallback(() => {
    // handle sign out
  }, []);
  // desktop menu
  const renderMenuItems = () =>
    menuItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className={`text-[var(--primary-text)] hover:text-white transition font-semibold  py-1 rounded-md ${item?.href ==pathName && 'underline text-white'}`}
      >
        {item.label}
      </Link>
    ));

  const renderMobileMenuItems = () =>
    menuItems.map((item) => (
      <li key={item.href}>
        <Link
          href={item.href}
          className="block  text-[var(--primary-text)] hover:text-[var(--primary-color)] font-semibold px-5 py-2   rounded-md transition hover:bg-[var(--primary-text)]"
          onClick={handleCloseMenu}
        >
          {item.label}
        </Link>
      </li>
    ));

  return (
    <nav className="bg-[var(--primary-color)] shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-2 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo & Mobile Menu */}
          <div className="flex flex-row-reverse items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="shop logo"
                width={500}
                height={500}
                className="w-8 h-8"
                priority
              />
              <span className="ml-2 text-xl font-bold text-[var(--primary-text)] duration-300 hover:text-white">
                GoVisa
              </span>
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={handleToggleMenu}
              className=" lg:hidden text-2xl text-[var(--primary-text)] focus:outline-none"
              aria-label="Toggle Menu"
              type="button"
            >
              {show ? <RxCross2 /> : <AiOutlineMenuUnfold />}
            </button>
          </div>

          {/* Center: Menu (Desktop) */}
          <div className="hidden lg:flex items-center md:gap-4 lg:gap-5 xl:gap-8">
            {renderMenuItems()}
          </div>

          {/* Right: Search & Auth */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* <BiSearchAlt2 className="w-6 h-6 text-slate-800 hover:text-[var(--primary-color)] cursor-pointer" /> */}
            {!user?.email ? (
              <Link
                href="/logIn"
                onClick={signOut}
                className="bg-[var(--primary-color)]  text-white px-4 py-2 rounded-md font-semibold hover:bg-[var(--hover-color)] transition"
              >
                Log Out
              </Link>
            ) : (
              <>
                <Link
                  href="/signUp"
                  className="text-[var(--text)] bg-[var(--button-color)] font-semibold px-2 md:px-3 py-2 rounded-md hover:bg-[var(--button-hover)] transition"
                >
                  Sign Up
                </Link>
                <Link
                  href="/signIn"
                  className="bg-[var(--button-color)] text-[var(--text)] px-4 py-2 rounded-md font-semibold hover:bg-[var(--button-hover)] transition"
                >
                  Log In
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={` lg:hidden  bg-[var(--primary-color)] shadow-md absolute  w-full z-40 duration-1000 ${
          show ? "top-16 left-0" : "top-16 -left-[1200px]"
        }`}
      >
        <ul className="flex flex-col space-y-2  py-4">
          {renderMobileMenuItems()}
        </ul>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
