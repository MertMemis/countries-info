"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";

const MenuButton = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <button
        className={` mr-6 ${isMenuVisible ? "hidden" : ""} pt-6`}
        onClick={toggleMenu}
      >
        <IoIosMenu className="w-9 h-9 text-green-900" />
      </button>

      {isMenuVisible && (
        <div className=" flex bg-[#efefef] flex-col w-64 h-screen shadow-innerShadow">
          <span className="w-full h-1/5 justify-center items-center flex border-b border-green-900 text-3xl font-semibold text-green-900">
            Dil / Tema
          </span>
          <Link
            className="w-full h-1/5 justify-center items-center flex border-b border-green-900 text-3xl font-semibold text-green-900"
            href="/"
          >
            Ana Menü
          </Link>
          <Link
            className="justify-center w-full h-1/5 items-center flex border-b border-green-900 text-3xl font-semibold text-green-900"
            href="/favoriler"
          >
            Favoriler
          </Link>
          <Link
            className="justify-center w-full h-1/5 items-center flex border-b border-green-900 text-3xl font-semibold text-green-900"
            href="/hakkımızda"
          >
            Hakkımızda
          </Link>
          <Link
            className="justify-center w-full h-1/5 items-center flex text-3xl font-semibold text-green-900"
            href="/info"
          >
            İletişim
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
