import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { Images } from "../../assets/Images";

//state here: correct, incorrect, initialFishes

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
  const [view, setView] = useState(false);

  //   console.log("here is view ", view);

  return (
    <>
      <FunctionalScoreBoard
        userInput={userInput}
        correctAnswer={correctAnswer}
        incorrectAnswer={incorrectAnswer}
      />
      {/* <FunctionalGameBoard /> */}
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
        setView={setView}
        // handleUserInformation = {(userInput) => {
        //     setUserInput(userInput)
        // }}
      />
      {{ view } && (
        <FunctionalFinalScore
          correctAnswer={correctAnswer}
          incorrectAnswer={incorrectAnswer}
        />
      )}
    </>
  );
}
