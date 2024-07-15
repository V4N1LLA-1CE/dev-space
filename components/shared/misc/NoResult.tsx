import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  desc: string;
  link: string;
  linkTitle: string;
}

const NoResult = ({ title, desc, link, linkTitle }: Props) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center text-light-500 dark:text-light-400">
      <Image
        src="/assets/images/light-no-result.png"
        alt="No Search Results"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-no-result.png"
        alt="No Search Results"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />
      <h2 className="h2-bold mt-2 font-jb-mono">
        <strong>{title}</strong>
      </h2>
      <p className="small-regular w-2/3 text-center font-jb-mono">
        <br />
        {desc}
      </p>
      <Link href={link} className="mt-10">
        <button className="small-regular shadow-light100_dark100 primary-gradient min-h-[46px] rounded-lg px-4 py-3 text-light-900 shadow-md">
          {linkTitle}
        </button>
      </Link>
    </div>
  );
};

export default NoResult;
