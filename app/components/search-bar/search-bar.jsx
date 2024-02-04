"use client";

import { useState } from "react";
import Link from "next/link";
import { BsFillQuestionCircleFill } from "react-icons/bs";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className="flex items-center justify-center h-screen w-screen flex-col pb-32">
      <div className="group flex items-center justify-center animate-pulse hover:animate-none">
        <span className="mb-7 rounded-full inline-block hover:shadow-xl">
          <BsFillQuestionCircleFill size={25} color="#14532d" />
        </span>
        <div className="hidden group-hover:block transition-all duration-1000 absolute bg-white text-green-900 border p-2 rounded shadow-md mb-56 max-w-64 ">
          Merhaba! Aşağıda gördüğün kutucuğa istediğin ülkenin adını yazıp
          aratarak o ülke ile alakalı bir takım bilgilere ulaşabilirsin.
          Ülkelerin ingilizce isimlerini girmen gerektiğini unutma.
        </div>
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        className="border border-green-900 w-2/4 p-3 rounded-full mb-4 text-center outline-green-900 select-none"
        placeholder="Ülke Adı Giriniz . . ."
        required
      />
      <Link
        href={`/${inputValue}`}
        type="submit"
        className=" bg-green-900 hover:bg-green-700 text-white font-bold w-1/12 py-2 px-4 rounded-full min-w-24"
      >
        <span className="flex items-center justify-center select-none">
          Ara
        </span>
      </Link>
    </form>
  );
}
