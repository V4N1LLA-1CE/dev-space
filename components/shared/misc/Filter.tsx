import React from "react";
import { FilterType } from "@/types";

const filters: FilterType[] = [
  { id: 1, label: "Most Recent", value: "most recent" },
  { id: 2, label: "Recommended", value: "recommended" },
  { id: 3, label: "Popular", value: "popular" },
  { id: 5, label: "Unanswered", value: "unanswered" },
];

const Filter = () => {
  return (
    <>
      {/* This is the pill div that is only visible when screen is large */}
      <div className="hidden md:block">
        <div className="body-regular flex items-center justify-start gap-5 text-light-500">
          {filters.map((item) => {
            return (
              <button
                className="cursor-pointer rounded-lg bg-light-800 px-5 py-2.5 transition-all ease-in-out focus:bg-watermelon-50 focus:text-primary-500 dark:bg-dark-300 dark:focus:bg-dark-400"
                key={item.id}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* this is the filter button and dropdown when screen is not large */}
      <div className="block md:hidden">filter button</div>
    </>
  );
};

export default Filter;
