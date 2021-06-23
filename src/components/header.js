import React from "react";
import "../style.css";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="bg-gray-700 text-center md:flex">
        <div className="w-full md:w-3/12">
          <h1 className='text-2xl text-white'>logo</h1>
        </div>
        <div className="text-white p-2 w-full md:w-9/12 ">
        <ul className=" inline-flex w-full justify-center md:justify-end">
          <li className="p-2">
            <a href="/">Home</a>
          </li>
          <li className="p-2 ">
            <a href="/about">About</a>
          </li>
          <li className="p-2 ">
            <a href="/users">Users</a>
          </li>
          <li className="p-2 ">
            <a href="/jsontoproduct">Json to block</a>
          </li>
          <li className="p-2 ">
            <a href="/removespaces">remove spaces</a>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
