"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ useLight }: { useLight: boolean }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => {
    const elem = document.activeElement as HTMLElement;
    setDropdownOpen(false);

    if (elem) {
      elem.blur();
    }
  };

  if (useLight) {
    return (
      <div className="navbar sticky top-0 z-50 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={() => {
                if (dropdownOpen) {
                  handleClick();
                }
                setDropdownOpen(!dropdownOpen);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-lg z-[1] mt-3 w-[calc(100vw-15px)] rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <Link onClick={handleClick} href="/#about">
                  about
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} href="/#projects">
                  projects
                </Link>
              </li>
              {/* <li>
                <Link onClick={handleClick} href="/links">
                  links
                </Link>
              </li> */}
              <li>
                <Link
                  href="/#contact"
                  className="btn btn-primary rounded-3xl font-medium text-white"
                  onClick={handleClick}
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost no-animation text-xl">
            <Image src="/img/logo.svg" alt="stynes." width="150" height="60" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/#about">about</Link>
            </li>
            <li>
              <Link href="/#projects">projects</Link>
            </li>
            {/* <li>
              <Link href="/links">links</Link>
            </li> */}
          </ul>
          <Link
            href="/#contact"
            className="btn btn-primary no-animation rounded-3xl font-medium text-white"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar bg-neutral-900">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={() => {
                if (dropdownOpen) {
                  handleClick();
                }
                setDropdownOpen(!dropdownOpen);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-lg z-[1] mt-3 w-[calc(100vw-15px)] rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <Link onClick={handleClick} href="/#about">
                  about
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} href="/#projects">
                  projects
                </Link>
              </li>
              {/* <li>
                <Link onClick={handleClick} href="/links">
                  links
                </Link>
              </li> */}
              <li>
                <Link
                  href="/#contact"
                  className="btn btn-primary rounded-3xl font-medium text-white"
                  onClick={handleClick}
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost no-animation text-xl">
            <Image
              src="/img/logo-light.svg"
              alt="stynes."
              width="150"
              height="60"
            />
          </Link>
        </div>
        <div className="navbar-end hidden text-white lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/#about">about</Link>
            </li>
            <li>
              <Link href="/#projects">projects</Link>
            </li>
            {/* <li>
              <Link href="/links">links</Link>
            </li> */}
          </ul>
          <Link
            href="/#contact"
            className="btn btn-primary no-animation rounded-3xl font-medium text-white"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    );
  }
}
