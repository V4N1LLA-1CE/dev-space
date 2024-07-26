import React from "react";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] cursor-pointer hover:opacity-80 max-lg:hidden">
      <div className="relative m-auto flex min-h-[56px] grow items-center gap-1 rounded-xl bg-light-800 px-2 dark:bg-dark-300">
        <Input
          type="text"
          placeholder="Search globally..."
          value=""
          className="paragraph-regular no-focus placeholder background-light800_dark300 cursor-pointer border-none caret-transparent shadow-none outline-none"
        />
        <div className="light-border-2 rounded-lg border-2 bg-light-700 px-[6px] py-px text-light-500 dark:bg-dark-200">
          ⌘K
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
