import React from "react";
import QuestionCard from "../component/QuestionCard";
import FlexContainer from "../component/FlexContainer";
import QuesContext from "../context/question-context";
import { useContext } from "react";

const VoteQuestion = () => {
  const context = useContext(QuesContext);
  

  return (
    <FlexContainer className="flex-column ">
      {context.questions
        ? context.questions.map((question) => (
            <QuestionCard key={question._id} questionData={question} />
          ))
        : "No Question!"}

      <QuestionCard />
    </FlexContainer>
  );
};

export default VoteQuestion;
