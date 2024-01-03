import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const QuestionCard = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>{data.question}</Card.Text>
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
