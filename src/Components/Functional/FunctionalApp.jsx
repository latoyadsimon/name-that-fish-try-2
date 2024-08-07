import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalApp() {
  const [userInput, setUserInput] = useState("");
  const [fishArray, setFishArray] = useState(initialFishes);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [incorrectAnswer, setIncorrectAnswer] = useState(0);

  const totalFishes = initialFishes.length;
  let view = false;

  if (correctAnswer + incorrectAnswer >= totalFishes) {
    view = true;
  }

  return (
    <>
      <FunctionalScoreBoard
        correctAnswer={correctAnswer}
        incorrectAnswer={incorrectAnswer}
        fishArray={fishArray}
        view={view}
      />
      <FunctionalGameBoard
        userInput={userInput}
        setUserInput={setUserInput}
        fishArray={fishArray}
        setFishArray={setFishArray}
        correctAnswer={correctAnswer}
        setCorrectAnswer={setCorrectAnswer}
        incorrectAnswer={incorrectAnswer}
        setIncorrectAnswer={setIncorrectAnswer}
        view={view}
      />
      {view && (
        <FunctionalFinalScore
          correctAnswer={correctAnswer}
          totalFishes={totalFishes}
        />
      )}
    </>
  );
}
