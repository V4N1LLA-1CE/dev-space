import React from "react";
import Link from "next/link";
import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/misc/Filter";
import NoResult from "@/components/shared/misc/NoResult";

const questions = [
  // {
  //   _id: 1,
  //   title: "How to center a div",
  //   tags: [
  //     { id: 1, tag_name: "TailwindCSS", tag_count: 1 },
  //     { id: 2, tag_name: "CSS", tag_count: 1 },
  //     { id: 3, tag_name: "Styling", tag_count: 1 },
  //   ],
  //   author: "Jake the Brogrammer",
  //   upvotes: 10,
  //   views: 128,
  //   answers: 2,
  //   createdAt: "2021-09-01T12:00:00.000Z",
  // },
  // {
  //   _id: 2,
  //   title: "How to apply custom CSS in NextJS",
  //   tags: [
  //     { id: 1, tag_name: "NextJS", tag_count: 1 },
  //     { id: 2, tag_name: "CSS", tag_count: 1 },
  //   ],
  //   author: "Jake the Brogrammer",
  //   upvotes: 7,
  //   views: 26,
  //   answers: 0,
  //   createdAt: "2020-09-01T12:00:00.000Z",
  // },
];

const HomeScreen = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-3 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end ">
          <button className="primary-gradient min-h-[46px] rounded-lg px-4 py-3 text-light-900 shadow-md">
            Ask a Question
          </button>
        </Link>
      </div>

      <div className="mt-11 flex items-center justify-between gap-5 md:flex-col md:items-start">
        <LocalSearch />
        <Filter />
      </div>

      <div className="mt-11 flex flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => {
            return <div key={question._id}>{question.title}</div>;
          })
        ) : (
          <NoResult
            title="No Results Found :("
            desc="It looks like we don't have any results for your search query. Don't
        worry, though! You can be the first to kickstart the discussion! Get
        involved and help build our community!"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default HomeScreen;
