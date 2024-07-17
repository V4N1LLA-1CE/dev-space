import React from "react";
import Link from "next/link";
import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/misc/Filter";
import NoResult from "@/components/shared/misc/NoResult";
import QuestionCard from "@/components/shared/cards/QuestionCard";

const questions = [
  {
    _id: 1,
    title: "How to center a div",
    tags: [
      { _id: "1", name: "TailwindCSS" },
      { _id: "2", name: "CSS" },
      { _id: "3", name: "Styling" },
    ],
    author: {
      _id: "123",
      name: "Jake the Brogrammer",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    upvotes: 10,
    views: 128,
    answers: [], // Assuming answers are objects, you can put actual answer objects here
    createdAt: new Date("2024-07-15T12:00:00.000Z"),
  },
  {
    _id: 2,
    title: "How to apply custom CSS in NextJS",
    tags: [
      { _id: "1", name: "NextJS" },
      { _id: "2", name: "CSS" },
    ],
    author: {
      _id: "123",
      name: "John Doe",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    upvotes: 7,
    views: 26,
    answers: [], // Assuming no answers
    createdAt: new Date("2024-07-11T12:00:00.000Z"),
  },
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
            return (
              <QuestionCard
                key={question._id}
                _id={question._id}
                title={question.title}
                tags={question.tags}
                author={question.author}
                upvotes={question.upvotes}
                views={question.views}
                answers={question.answers}
                createdAt={question.createdAt}
              />
            );
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
