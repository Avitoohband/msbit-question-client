import React from "react";
import QuestionCard from "../component/QuestionCard";
import FlexContainer from "../component/FlexContainer";
import QuesContext from "../context/question-context";
import { useContext } from "react";

const VoteQuestion = () => {
  const context = useContext(QuesContext);

  return (
    <FlexContainer className="flex-column">
      {context.initialized && context.questions && context.questions.length > 0
        ? context.questions.map((question) => {
            return <QuestionCard key={question._id} data={question} />;
          })
        : !context.initialized
        ? "loading..."
        : "No Question!"}
    </FlexContainer>
  );
};

export default VoteQuestion;
