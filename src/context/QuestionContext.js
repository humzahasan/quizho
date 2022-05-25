import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const QuestionContext = createContext({ questions: [] });

const QuestionProvider = ({ children }) => {
  const [allQuestions, setAllQuestions] = useState([]);

  const getQuestions = async () => {
    const myQuestions = await axios.get(
      "https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=10&difficulty=easy&tags=marvel"
    );
    const result = await myQuestions.data;
    setAllQuestions(result);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <QuestionContext.Provider value={{ allQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};

const useQuestion = () => useContext(QuestionContext);

export { QuestionProvider, useQuestion };
