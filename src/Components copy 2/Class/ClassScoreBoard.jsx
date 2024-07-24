import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  render() {
    const { correctCount, incorrectCount, fishArray, view } = this.props;

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
}
