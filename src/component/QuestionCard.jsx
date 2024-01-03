import React from "react";
import { Card, Button } from "react-bootstrap";

const QuestionCard = (props) => {
  const { questionData } = props;


  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>questions</Card.Text>
        <div className="d-flex flex-column gap-2">
          <Button variant="light">answer</Button>
          <Button variant="light">answer</Button>
          <Button variant="light">answer</Button>
          <Button variant="light">answers</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
