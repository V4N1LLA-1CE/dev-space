import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TopQuestionType, PopularTagType } from "@/types";

const TopQuestions = () => {
  const topQuestionsList: TopQuestionType[] = [
    {
      id: 1,
      title: "How to specify to NextJS components whether to use SSR or CSR?",
    },
    {
      id: 2,
      title:
        "How to pass data through react components without using prop drilling?",
    },
    { id: 3, title: "How to center a div with tailwindcss?" },
    {
      id: 4,
      title:
        "What are the differences between arrow function and normal function in Javascript?",
    },
  ];

  return (
    <section className="text-dark400_light700 flex w-[300px] flex-col items-start gap-6">
      <p className="h3-bold text-dark200_light900">Top Questions</p>
      {topQuestionsList.map((item) => {
        return (
          <Link
            key={item.id}
            href="ask-question"
            className="flex w-full items-center justify-between gap-4"
          >
            <p>{item.title}</p>
            <Image
              className="invert-colors"
              src="/assets/icons/right-arrow.svg"
              alt="Go to Question"
              width={20}
              height={20}
            ></Image>
          </Link>
        );
      })}
    </section>
  );
};

const PopularTags = () => {
  const popularTagsList: PopularTagType[] = [
    { id: 1, tag_name: "NextJS", tag_count: 3 },
    { id: 2, tag_name: "Javascript", tag_count: 2 },
    { id: 3, tag_name: "Go", tag_count: 1 },
    { id: 4, tag_name: "Docker", tag_count: 1 },
    { id: 5, tag_name: "React", tag_count: 1 },
  ];
  return (
    <section className="text-dark400_light700 flex w-[300px] flex-col items-start gap-6">
      <p className="h3-bold text-dark200_light900">Popular Tags</p>
      {popularTagsList.map((item) => {
        return (
          <div
            key={item.id}
            className="small-regular flex w-full items-center justify-between"
          >
            <Link href="/tags">
              <button className="btn-secondary shadow-light-100_darknone text-light400_light500 rounded px-3 py-2">
                {item.tag_name}
              </button>
            </Link>
            <p>{item.tag_count}</p>
          </div>
        );
      })}
    </section>
  );
};

const RightSidebar = () => {
  return (
    <section className="sticky bottom-0 right-0 flex h-dvh flex-col items-center  gap-4 overflow-y-scroll pb-6 pr-6 pt-32 max-xl:hidden">
      <div className="background-light900_dark200 light-border rounded-lg border p-4">
        <TopQuestions />
      </div>
      <div className="background-light900_dark200 light-border rounded-lg border p-4">
        <PopularTags />
      </div>
    </section>
  );
};

export default RightSidebar;
