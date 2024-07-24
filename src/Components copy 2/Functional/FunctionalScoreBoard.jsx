import "./styles/score-board.css";
//  Where the score is presented

export function FunctionalScoreBoard({
  correctAnswer,
  incorrectAnswer,
  fishArray,
  view,
}) {
  const incorrectCount = incorrectAnswer;
  const correctCount = correctAnswer;
  const answersLeft = fishArray.map((fish) => fish.name);

  if (view === false) {
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
}
