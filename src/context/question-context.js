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

  const updateNumberOfVotes = (data, answerIndex, numbOfVotes) => {
    const questionIndex = questions.findIndex((q) => q._id === data._id);
    questions[questionIndex].answers[answerIndex].numberOfVotes = numbOfVotes;
    console.log(questions);
  };

  return (
    <QuesContext.Provider
      value={{ questions, addQuestion, updateNumberOfVotes, initialized }}
    >
      {children}
    </QuesContext.Provider>
  );
};

export default QuesContext;
