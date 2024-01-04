import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { voteAnswer } from "../util/questionUtil";
import QuesContext from "../context/question-context";
import { useContext } from "react";

const QuestionCard = ({ data }) => {
  const context = useContext(QuesContext);
  const [clickedIndex, setClickedIndex] = useState(null);

  const { answers } = data;
  const newAnswers = [
    ...answers.filter((ans) => {
      return ans !== null && ans !== undefined;
    }),
  ];

  const handleClick = async (index) => {
    try {
      const numbOfVotes = await voteAnswer(data._id, index);
      context.updateNumberOfVotes(data, index, numbOfVotes);
      setClickedIndex(index);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>{data.question}</Card.Text>
        <div className="d-flex flex-column gap-2">
          {newAnswers.map((ans, index) => (
            <Button
              onClick={() => handleClick(index)}
              key={index}
              variant={
                clickedIndex === index && index === data.correctAnswer
                  ? "success"
                  : clickedIndex === index && index !== data.correctAnswer
                  ? "danger"
                  : "light"
              }
            >
              {console.log(data)}
              <div className="d-flex justify-content-between ">
                <span>{ans.answer}</span>
                <span>
                  {clickedIndex === index && newAnswers.at(index).numberOfVotes}
                </span>
              </div>
            </Button>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
