import React from "react";
import Link from "next/link";

const Tag = ({ tagName }: { tagName: string }) => {
  return (
    <Link href="/tags">
      <button className="shadow-light-100_darknone text-light400_light500 rounded-md bg-light-800 px-4 py-1 shadow-md dark:bg-dark-300">
        <span className="subtle-regular uppercase">{tagName}</span>
      </button>
    </Link>
  );
};

export default Tag;
