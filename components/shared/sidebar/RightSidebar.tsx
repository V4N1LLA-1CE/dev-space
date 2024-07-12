import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopQuestions = () => {
  return (
    <section className="text-dark400_light700 flex w-[300px] flex-col items-start gap-6">
      <p className="h3-bold">Top Questions</p>
      <Link
        href="/ask-question"
        className="flex w-full items-center justify-between gap-4"
      >
        <p>
          Question here djfiahofjahsofha oashf ah foasofaof hauf osuf oaus fhaos
          hojshvsoajhgos dhoashg aofhd oa hofahs foasfohsoauhfoha osh soash oasu
          hfouh aouh aoh aohf oahfao hsfo
        </p>
        <Image
          src="/assets/icons/right-arrow.svg"
          alt="Go to Question"
          width={20}
          height={20}
          className="invert-colors"
        />
      </Link>
      <Link
        href="/ask-question"
        className="flex w-full items-center justify-between gap-4"
      >
        <p>Question here</p>
        <Image
          src="/assets/icons/right-arrow.svg"
          alt="Go to Question"
          width={20}
          height={20}
          className="invert-colors"
        />
      </Link>
      <Link
        href="/ask-question"
        className="flex w-full items-center justify-between gap-4"
      >
        <p>Question here</p>
        <Image
          src="/assets/icons/right-arrow.svg"
          alt="Go to Question"
          width={20}
          height={20}
          className="invert-colors"
        />
      </Link>
      <Link
        href="/ask-question"
        className="flex w-full items-center justify-between gap-4"
      >
        <p>Question here</p>
        <Image
          src="/assets/icons/right-arrow.svg"
          alt="Go to Question"
          width={20}
          height={20}
          className="invert-colors"
        />
      </Link>
    </section>
  );
};

const RightSidebar = () => {
  return (
    <section className="sticky bottom-0 right-0 flex h-dvh flex-col items-center overflow-y-scroll pb-6 pr-6 pt-32 max-xl:hidden">
      <div className="background-light900_dark200 light-border rounded-lg border p-4">
        <TopQuestions />
      </div>
    </section>
  );
};

export default RightSidebar;
