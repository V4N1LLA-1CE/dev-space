import React from "react";
import Link from "next/link";
import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/misc/Filter";

const HomeScreen = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-3 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end ">
          <button className="shadow-light100_dark100 primary-gradient min-h-[46px] rounded-lg px-4 py-3 text-light-900">
            Ask a Question
          </button>
        </Link>
      </div>

      <div className="mt-11 flex items-center justify-between gap-5 md:flex-col md:items-start">
        <LocalSearch />
        <Filter />
      </div>
    </>
  );
};

export default HomeScreen;
