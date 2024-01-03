export const getQeustions = async () => {
  try {
    const url = `http://localhost:3001/api/question`;
    const response = await fetch(url, { method: "GET" });

    if (response.status !== 204 && response.status !== 400) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.error(err.message);
  }
};

export const createQuestion = async (questionData, trivia) => {
  try {
    const url = `http://localhost:3001/api/question`;

    let question = {
      question: questionData.question,
      answers: Object.keys(questionData)
        .filter((key) => key.startsWith("ans"))
        .map((key) => questionData[key]),
    };

    if (trivia) {
      question = { ...triviaSetUp(question) };
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err.message);
  }
};

const triviaSetUp = (question) => {
  const correct = question.answers[0];

  let shuffled = question.answers.slice();
  shuffled = shuffled.sort(() => Math.random() - 0.5);

  const correctAnswerIndex = shuffled.findIndex((answer) => answer === correct);

  const newQuestion = {
    ...question,
    answers: shuffled,
    correctAnswer: correctAnswerIndex,
  };

  return newQuestion;
};
