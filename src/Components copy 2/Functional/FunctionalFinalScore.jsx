import "./styles/final-score.css";

const correctCount = 0;
const totalCount = 0;

export const FunctionalFinalScore = ({ correctAnswer, allFishes }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctAnswer}</p>
      <hr />
      <p>{`${allFishes}`}</p>
    </div>
  </div>
);
