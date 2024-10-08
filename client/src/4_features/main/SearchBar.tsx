import Button from "@/6_shared/ui/Button";
import Input from "@/6_shared/ui/Input";
import React from "react";

const SearchBar = () => {
  return (
    <div className="grid md:grid-cols-search-bar items-center border border-gray-500 rounded-lg bg-white">
      <Input variant={"secondary"} placeholder="Откуда" className="md:border-transparent md:rounded-lg rounded-[7px] rounded-b-none" />
      <div className="flex items-center">
        <div className="hidden md:border-l border-gray-500 w-[1px] h-[25px] md:block"></div>
        <button className="flex items-center justify-center md:w-full md:h-full mx-[10px] w-8 h-8 rounded-full border border-gray-500 absolute z-10 bg-white right-3 rotate-90 md:border-none md:relative md:right-0 md:rotate-0">
          <img src="/icons/reverse-arrows.svg" alt="reverse" />
        </button>
        <div className="hidden md:border-l border-gray-500 w-[1px] h-[25px] md:block"></div>
      </div>
      <Input variant={"secondary"} placeholder="Куда" className="md:border-transparent md:rounded-lg rounded-none" />
      <div className="hidden md:border-l border-gray-500 w-[1px] h-[25px] md:block"></div>
      <Input variant={"secondary"} placeholder="Когда" className="md:border-transparent rounded-none" />
      <Button className="md:rounded-tr-[7px] md:rounded-l-none md:w-32 bg-purple-500 text-white h-[62px] rounded-[7px] rounded-t-none ">Найти</Button>
    </div>
  );
};

export default SearchBar;
