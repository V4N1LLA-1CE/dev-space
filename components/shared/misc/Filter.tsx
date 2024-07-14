"use client";

import React, { useState } from "react";
import { FilterType } from "@/types";
import Image from "next/image";

const filters: FilterType[] = [
  { id: 1, label: "Most Recent", value: "most recent" },
  { id: 2, label: "Recommended", value: "recommended" },
  { id: 3, label: "Popular", value: "popular" },
  { id: 5, label: "Unanswered", value: "unanswered" },
];

const Filter = () => {
  const [openState, setOpenState] = useState(false);

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
      <div className="block md:hidden">
        <Image
          src="/assets/icons/filter-icon.svg"
          alt="Filter"
          width={25}
          height={25}
          className="cursor-pointer"
          onClick={() => {
            if (!openState) {
              setOpenState(true);
            } else {
              setOpenState(false);
            }
          }}
        />
        <div
          className={`${openState ? "block" : "hidden"} body-regular light-border fixed right-14 z-50 mt-7 rounded-lg border bg-light-900 p-1 shadow-md transition-all dark:border-dark-400 dark:bg-dark-300 max-sm:right-7`}
        >
          {filters.map((item) => {
            return (
              <div
                key={item.id}
                className="flex cursor-pointer items-center justify-start rounded px-2.5 py-1.5 hover:bg-light-700 dark:hover:bg-dark-400"
                onClick={() => {
                  setOpenState(false);
                }}
              >
                <span className="text-light-500">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Filter;
