import "./styles/final-score.css";

const correctCount = 0;
const totalCount = 0;

export const FunctionalFinalScore = ({
  correctAnswer,
  incorrectAnswer,
  allFishes,
}) => (
  // console.log("this is what we got: ", correctAnswer, incorrectAnswer)
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctAnswer}</p>
      <hr />
      <p>{`${allFishes}`}</p>
      {/* <p>{correctCount}</p>
      <hr />
      <p>{totalCount}</p> */}
    </div>
  </div>
);
