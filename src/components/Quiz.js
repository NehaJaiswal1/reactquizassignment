import React, { useState } from "react";
import Question from "./Question.js";

const questions = [
  {
    question: "When did The First World War happen?",
    answers: [
      { text: "1914", correct: true },
      { text: "1939", correct: false },
      { text: "1947", correct: false },
      { text: "1962", correct: false },
    ],
  },
  {
    question: "Who was the Second Prime Minister of India?",
    answers: [
      { text: "Lal Bahadur Sastri", correct: true },
      { text: "Gulzarilal Nanda", correct: false },
      { text: "Indira Gandhi", correct: false },
      { text: "Morarji Ranchhodji Desai", correct: false },
    ],
  },
  // add more questions here
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerClick = (answerIndex) => {
    setUserAnswers([...userAnswers, answerIndex]);
  };

  const handleNextClick = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const score = userAnswers.filter(
    (answer, index) => questions[index].answers[answer].correct
  ).length;

  return (
    <div>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleAnswerClick}
        />
      ) : (
        <div>
          <h2>Your score: {score}</h2>
        </div>
      )}
      {currentQuestion < questions.length && (
        <button onClick={handleNextClick}>Next</button>
      )}
    </div>
  );
}

export default Quiz;
