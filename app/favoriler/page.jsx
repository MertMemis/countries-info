"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.list);

  const favCountry = favorites.map((country, index) => (
    <div
      key={index}
      className="border-b border-black mb-16 flex items-center justify-center"
    >
      <Link href={`/${encodeURIComponent(country)}`}>{country}</Link>
    </div>
  ));

  return (
    <div>
      <h1 className=" text-5xl mb-9">Favoriler</h1>
      {favCountry}
    </div>
  );
};
export default Favorites;
