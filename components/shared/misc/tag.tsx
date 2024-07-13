import React from "react";
import Link from "next/link";

const Tag = ({ tagName }: { tagName: string }) => {
  return (
    <Link href="/tags">
      <button className="btn-secondary shadow-light-100_darknone text-light400_light500 rounded px-3 py-2">
        {tagName}
      </button>
    </Link>
  );
};

export default Tag;
