"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="bg-blue-400 flex flex-row justify-between items-center text-2xl font-bold sticky top-0">
      <Link href="/" className="justify-start m-2">
        Verbot
      </Link>
      {/* <div
        className="max-sm:flex hidden absolute top-3 right-4 mr-3 flex-col justify-between w-9 h-8"
        onClick={() => setMenu(!menu)}
      >
        <span className="h-2 w-full bg-white rounded"></span>
        <span className="h-2 w-full bg-white rounded"></span>
        <span className="h-2 w-full bg-white rounded"></span>
      </div> */}

      <div className="max-sm:hidden max-sm:w-full max-sm:mb-1">
        <ul className="flex max-sm:flex-col ">
          <li className="list-none max-sm:w-full max-sm:text-center">
            <Link
              className="max-sm:my-1 max-sm:mx-2 p-2 mx-2 active:bg-blue-600 hover:bg-blue-200 rounded"
              href="/pages/services"
            >
              Services
            </Link>
          </li>
          <li className="list-none max-sm:w-full max-sm:text-center">
            <Link
              className="max-sm:my-1 max-sm:mx-2 p-2 mx-2 active:bg-blue-600 hover:bg-blue-200 rounded"
              href="/pages/contact"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;