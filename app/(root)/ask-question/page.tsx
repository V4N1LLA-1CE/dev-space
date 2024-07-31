import QuestionPrompt from "@/components/shared/forms/QuestionPrompt";
import React from "react";

const AskQuestion = () => {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900 mb-8">Ask a Question</h1>
      <div>
        <QuestionPrompt />
      </div>
    </div>
  );
};

export default AskQuestion;
