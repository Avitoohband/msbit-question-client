import { createContext, useEffect, useState } from "react";
import { getQeustions } from "../util/questionUtil";

const QuesContext = createContext();

export const QuesProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestionsHelper = async () => {
      const questionsData = await getQeustions();
      if (questionsData) {
        setQuestions(questionsData);
      }
    };

    getQuestionsHelper();
  }, []);

  const constAddQuestion = (question) => {
    setQuestions((prev) => [...questions, question]);
  };

  const updateQuestion = (index, updatedQuestion) => {
    questions[index] = updateQuestion;
    setQuestions(...questions);
  };

  return (
    <QuesContext.Provider
      value={{ questions, constAddQuestion, updateQuestion }}
    >
      {children}
    </QuesContext.Provider>
  );
};

export default QuesContext;
