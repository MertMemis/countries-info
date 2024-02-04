"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoMdRemoveCircle, IoMdAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "@/lib/features/favorites/favSlice";

const CountryPage = ({ params }) => {
  const [data, setData] = useState(null);

  const countryName = data?.name?.official;
  const pathname = params.slug;
  const startOfTheWeek = data?.startOfWeek;
  const upperCaseWeek =
    startOfTheWeek?.charAt(0).toUpperCase() + startOfTheWeek?.slice(1);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list);

  const isFavorite = favorites.includes(countryName);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(countryName));
    } else {
      dispatch(addFavorite(countryName));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${pathname}`
        );
        const newData = await response.json();
        setData(newData[0]);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Yükleniyor...</div>;
  }

  const population = data.population?.toLocaleString();

  return (
    <div>
      <div className="text-center h-20 flex justify-center mt-4">
        <span className="text-6xl text-green-900 font-extrabold">
          {countryName}
        </span>
        <button onClick={handleToggleFavorite} className="ml-5 text-green-600">
          {isFavorite ? (
            <IoMdRemoveCircle size={40} />
          ) : (
            <IoMdAddCircle size={40} />
          )}
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        <div className=" text-center">
          <p className="my-10">
            <span className="text-3xl font-semibold text-green-900">
              Başkent
            </span>{" "}
            <br />
            {data.capital}
          </p>
          <p className="my-10 border-y border-[#25844b54] py-5 ">
            <span className="text-3xl font-semibold text-green-900">Nüfus</span>{" "}
            <br />
            {population}
          </p>
          <p className="my-10">
            <span className="text-3xl font-semibold text-green-900">Bölge</span>{" "}
            <br />
            {data.subregion}
          </p>
        </div>
        <div className=" justify-center items-center flex flex-col -mt-24">
          <div className="group flex items-center justify-center animate-pulse hover:animate-none top-64">
            <span className="mb-7 rounded-full inline-block hover:shadow-xl">
              <BsFillQuestionCircleFill size={25} color="#14532d" />
            </span>
            <div className="hidden group-hover:block transition-all duration-1000 absolute bg-white text-green-900 border p-2 rounded shadow-md mb-60 max-w-64 ">
              Ülke ismin yanında gördüğün "+" butonuna bastığında ülke
              favorilerine eklenecek. Sağ üstte gördüğün menüden favoriler
              sayfasına ulaşabilirsin. Aşağıda gördüğün ok işareti ile de ana
              sayfaya dönebilirsin.
            </div>
          </div>
          <img src={data.flags.png} />
          <Link
            className="bottom-32 w-20 h-20 items-center justify-center flex absolute text-green-900 hover:bg-slate-100 rounded-full"
            href="/"
          >
            <RiArrowGoBackFill size={50} />
          </Link>
        </div>
        <div className="text-center">
          <p className="my-10">
            <span className="text-3xl font-semibold text-green-900">Dil</span>{" "}
            <br />
            {Object.keys(data.languages).map((languageCode) => (
              <div key={languageCode}>&nbsp;{data.languages[languageCode]}</div>
            ))}
          </p>
          <p className="my-10 border-y border-[#25844b54] py-10">
            <span className="text-3xl font-semibold text-green-900">
              Hafta Başlangıcı
            </span>{" "}
            <br />
            {upperCaseWeek}
          </p>
          <p className="my-10">
            <span className="text-3xl font-semibold text-green-900">
              Para Birimi
            </span>{" "}
            <br />{" "}
            {Object.keys(data.currencies).map((currencyCode) => (
              <div key={currencyCode}>
                {currencyCode} / {data.currencies[currencyCode].name} / (
                {data.currencies[currencyCode].symbol})
              </div>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
