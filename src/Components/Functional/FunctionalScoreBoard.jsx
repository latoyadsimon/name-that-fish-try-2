import "./styles/score-board.css";
//  Where the score is presented

// let incorrectCount = 0;
// let correctCount = 0;
// const incorrectCount = 0;
// const correctCount = 0;
const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard({
  //   userInput,
  correctAnswer,
  incorrectAnswer,
  //   view,
  //   setView,
}) {
  //   console.log("this is carried over:", correctAnswer, userInput);
  console.log("this is the correct answer:", correctAnswer);
  console.log("this is the incorrect answer:", incorrectAnswer);
  //   console.log("this is userInput: ", userInput);
  const incorrectCount = incorrectAnswer;
  const correctCount = correctAnswer;

  //   const initialFishes = fishArray;

  //   correctAnswer ? correctCount++ : (incorrectCount = incorrectCount + 1);

  //   const answerOnChange = () => {
  //     if (answersLeft.length > 1) {
  //       answersLeft.shift();
  //       console.log("this is view now: ", view);
  //     } else {
  //       setView(true);
  //       console.log("this is view now: ", view);
  //     }
  //   };

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
