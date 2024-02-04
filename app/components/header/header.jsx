import Link from "next/link";
import MenuButton from "./button/button";

export default function Header() {
  return (
    <>
      <header className=" bg-[#efefef] flex justify-between items-center px-4 py-3 border-b-[1px] border-green-900">
        <Link
          href="/"
          className=" text-green-900 py-2 pl-4 font-extrabold text-[30px] select-none"
        >
          Countries
        </Link>
      </header>

      <div className="absolute top-0 right-0 ">
        <MenuButton />
      </div>
    </>
  );
}
