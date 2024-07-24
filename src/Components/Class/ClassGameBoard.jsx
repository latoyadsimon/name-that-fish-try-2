import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  render() {
    const {
      fishArray,
      userInput,
      correctCount,
      incorrectCount,
      view,
      setUserInput,
      setCorrectCount,
      setIncorrectCount,
      setFishArray,
    } = this.props;

    const nextFishToName = fishArray[0];

    const handleUserInput = () => {
      userInput.toLowerCase() === nextFishToName.name
        ? setCorrectCount(correctCount + 1)
        : setIncorrectCount(incorrectCount + 1);

      if (fishArray.length > 1) {
        let newFishArray = fishArray.filter((fish) => fish !== nextFishToName);
        setFishArray(newFishArray);
      }
    };

    const onSubmit = (e) => {
      e.preventDefault();
      handleUserInput(userInput, nextFishToName);
      setUserInput("");
    };

    if (view === false) {
      return (
        <div id="game-board">
          <div id="fish-container">
            <img src={nextFishToName.url} alt={nextFishToName.name} />
          </div>
          <form id="fish-guess-form" onSubmit={onSubmit}>
            <label htmlFor="fish-guess">What kind of fish is this?</label>
            <input
              type="text"
              name="fish-guess"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
            />
            <input type="submit" />
          </form>
        </div>
      );
    }
  }
}
