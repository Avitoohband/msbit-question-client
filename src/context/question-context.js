import { createContext, useEffect, useState } from "react";
import { getQeustions } from "../util/questionUtil";

const QuesContext = createContext();

export const QuesProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const getQuestionsHelper = async () => {
      const questionsData = await getQeustions();
      if (questionsData) {
        setQuestions(questionsData);
        setInitialized(true);
      }
    };

    getQuestionsHelper();
  }, []);

  const addQuestion = (question) => {
    if (question !== null && question !== undefined) {
      setQuestions((prev) => [...prev, question]);
    }
  };

  const updateQuestion = (index, updatedQuestion) => {
    questions[index] = updateQuestion;
    setQuestions(...questions);
  };

  return (
    <QuesContext.Provider
      value={{ questions, addQuestion, updateQuestion, initialized }}
    >
      {children}
    </QuesContext.Provider>
  );
};

export default QuesContext;
