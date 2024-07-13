"use client";
import Image from "next/image";
import React, { useState } from "react";

const LocalSearch = () => {
  const [searchField, setSearchField] = useState("");
  return (
    <>
      <form className="w-full">
        <div className="background-light800_dark300 flex items-center justify-start rounded-lg p-1 pl-4">
          <Image
            src="/assets/icons/local-search.svg"
            alt="Search"
            width={30}
            height={30}
            className="mb-[0.1rem] cursor-pointer"
            onChange={() => {}}
          />
          <input
            type="text"
            placeholder="Search Topics..."
            value={searchField}
            className="paragraph-regular no-focus placeholder background-light800_dark300 w-full border-none px-4 py-3 text-light-500 caret-watermelon-400 shadow-none outline-none focus:placeholder:opacity-50"
            onChange={(event) => setSearchField(event.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default LocalSearch;
