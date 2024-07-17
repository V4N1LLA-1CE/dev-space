import Link from "next/link";
import React from "react";
import Tag from "../misc/Tag";
import Metric from "../misc/Metric";
import { calcTime, formatNum } from "@/lib/utils";

interface QuestionProps {
  _id: number;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionProps) => {
  const howLongAgoWasQuestionAsked = calcTime(createdAt);
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col items-start justify-between gap-5 ">
        <div>
          <span className="subtle-regular line-clamp-1 text-watermelon-300 dark:text-watermelon-100 sm:hidden">
            {howLongAgoWasQuestionAsked}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>

        {/* if signed in, add edit & delete actions */}
      </div>

      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => {
          return <Tag key={tag._id} tagName={tag.name} />;
        })}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3 max-lg:flex-col max-lg:items-start">
        <div className="flex items-center justify-start">
          <Metric
            imgURL="/assets/icons/avatar.svg"
            alt="user"
            value={author.name}
            title={` - ${howLongAgoWasQuestionAsked}`}
            href={`/profile/${author._id}`}
            isAuthor
            textStyles="body-medium primary-text-gradient"
          />
        </div>

        <div className="flex items-center justify-end gap-3 max-md:justify-start">
          <Metric
            imgURL="assets/icons/upvote-no-fill.svg"
            alt="Upvotes"
            value={formatNum(upvotes)}
            title=" Votes"
            textStyles="small-medium text-watermelon-300 dark:text-watermelon-100"
          />
          <Metric
            imgURL="assets/icons/message.svg"
            alt="Messages"
            value={formatNum(answers.length)}
            title=" Answers"
            textStyles="small-medium text-watermelon-300 dark:text-watermelon-100"
          />
          <Metric
            imgURL="assets/icons/eye.svg"
            alt="Eye"
            value={formatNum(views)}
            title=" Views"
            textStyles="small-medium text-watermelon-300 dark:text-watermelon-100"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
