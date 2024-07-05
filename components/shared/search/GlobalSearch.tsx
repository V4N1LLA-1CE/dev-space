import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative m-auto flex min-h-[56px] grow items-center gap-1 rounded-xl px-2">
        <Image
          src="/assets/icons/globalsearch-icon.svg"
          alt="Search"
          width={25}
          height={25}
          className="cursor-pointer pb-[0.1rem]"
        />

        <Input
          type="text"
          placeholder="Search globally"
          value=""
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
