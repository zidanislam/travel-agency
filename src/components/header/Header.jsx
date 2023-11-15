import {
    faGoogle,
    faLinkedinIn,
    faPinterestP,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
    faBarsStaggered,
    faMagnifyingGlass,
    faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="flex justify-between px-10 py-1 bg-gray-200">
        <div className="flex gap-5">
          <p>(000)999-898-999</p>
          <p>info@trisog.com</p>
        </div>
        <div className="flex gap-5">
          <div>
            <FontAwesomeIcon icon={faTwitter} className="ml-3" />
            <FontAwesomeIcon icon={faLinkedinIn} className="ml-3" />
            <FontAwesomeIcon icon={faGoogle} className="ml-3" />
            <FontAwesomeIcon icon={faPinterestP} className="ml-3" />
          </div>
          <div>
            <p>Eur</p>
            {/* dropdown */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 mx-auto 2xl:px-80 xl:px-10 lg:px-20 md:px-6 px-6 2xl:my-8 xl:my-5 lg:my-5 md:my-5 my-5">
        <Link to="/">
          <img
            className="w-32 col-span-1 -ml-2"
            src="https://i.ibb.co/RjzHvh3/DRESS.png"
            alt="logo"
          />
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-7 cursor-pointer md:hidden"
        >
          {open ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBarsStaggered} />
          )}
        </div>
        <div
          className={`my-auto md:text-left md:pb-2 pb-12 md:col-span-3 absolute md:static bg-white md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          <Link
            to="/"
            className="2xl:mr-14 xl:mr-10 lg:mr-8 md:mr-4 text-base md:inline md:my-0 my-7 block"
            onClick={() => setOpen(!open)}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="2xl:mr-14 xl:mr-10 lg:mr-8 md:mr-4 text-base md:inline md:my-0 my-7 block"
            onClick={() => setOpen(!open)}
          >
            About Us
          </Link>
          {/* <Link
          to="/about"
          className="2xl:mr-14 xl:mr-10 lg:mr-8 md:mr-4 text-base md:inline md:my-0 my-7 block"
          onClick={() => setOpen(!open)}
        >
          About
        </Link> */}
          <Link
            to="/destinations"
            className="2xl:mr-14 xl:mr-10 lg:mr-8 md:mr-4 text-base md:inline md:my-0 my-7 block"
            onClick={() => setOpen(!open)}
          >
            Destinations
          </Link>
        </div>
        <div className="my-auto md:text-right md:pb-2 pb-12 md:col-span-2 absolute md:static bg-white md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-5"/>
          <p
            className="text-base md:inline md:my-0 my-7 block"
            onClick={() => setOpen(!open)}
          >
            <FontAwesomeIcon icon={faUser} className=" mr-2" />
            Login / Register
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
