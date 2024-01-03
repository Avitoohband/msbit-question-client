import { Button } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import FlexContainer from "../component/FlexContainer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <FlexContainer >
      <Button className="rounded-5" onClick={() => navigate("/create")}>
        {" "}
        Create
      </Button>
      <Button className="rounded-5" onClick={() => navigate("/vote")}>
        {" "}
        Vote
      </Button>
    </FlexContainer>
  );
};

export default Home;
