import React, { useState } from "react";
import FlexContainer from "../component/FlexContainer";
import { Button } from "react-bootstrap";
import { createQuestion } from "../util/questionUtil";

const initiateFormData = {
  question: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
};

const CreateForm = () => {
  const [formData, setFormData] = useState(initiateFormData);
  const [isTrivia, setIsTirvia] = useState(false);

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();    
  const question = await createQuestion(formData, isTrivia);
    
  };

  const changeTypeHandler = () => {
    setIsTirvia((prev) => !prev);
  };

  return (
    <FlexContainer className="py-5 text-center flex-column">
      <h2>Create Question</h2>
      <div class="col-md-8 order-md-1">
        <form class="needs-validation" onSubmit={onSubmitHandler}>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="col-md-6 mb-3">
              <label for="question">Question</label>
              <input
                type="text"
                name="question"
                class="form-control"
                id="question"
                placeholder="Enter question"
                onChange={onChangeHandler}
                required
              />
              <div class="invalid-feedback">Valid question is required.</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="question">
                {isTrivia ? "Correct Answer" : "Answer"}
              </label>
              <input
                type="text"
                name="answer1"
                class="form-control"
                id="ans1"
                placeholder="Enter Answer"
                onChange={onChangeHandler}
                required
              />
              <div class="invalid-feedback">Valid answer is required.</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="question">Answer</label>
              <input
                type="text"
                name="answer2"
                class="form-control"
                id="ans2"
                placeholder="Enter Answer"
                onChange={onChangeHandler}
                required
              />
              <div class="invalid-feedback">Valid answer is required.</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="question">Answer</label>
              <input
                type="text"
                name="answer3"
                class="form-control"
                id="ans3"
                placeholder="Enter Answer"
                onChange={onChangeHandler}
                required
              />
              <div class="invalid-feedback">Valid answer is required.</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="question">Answer</label>
              <input
                type="text"
                name="answer4"
                class="form-control"
                id="ans4"
                placeholder="Enter Answer"
                onChange={onChangeHandler}
                required
              />
              <div class="invalid-feedback">Valid answer is required.</div>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-center ">
            <Button onClick={changeTypeHandler}>
              {isTrivia ? "Poll" : "Trivia"}
            </Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </div>
    </FlexContainer>
  );
};

export default CreateForm;
