import { Component } from "react";

const totalCount = 0;
const correctCount = 0;

export class ClassFinalScore extends Component {
  render() {
    const { correctCount, allFishes } = this.props;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{allFishes}</p>
          {/* <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p> */}
        </div>
      </div>
    );
  }
}
