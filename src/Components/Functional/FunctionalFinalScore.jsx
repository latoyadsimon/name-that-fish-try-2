import "./styles/final-score.css";

export const FunctionalFinalScore = ({ correctAnswer, totalFishes }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctAnswer}</p>
      <hr />
      <p>{`${totalFishes}`}</p>
    </div>
  </div>
);
