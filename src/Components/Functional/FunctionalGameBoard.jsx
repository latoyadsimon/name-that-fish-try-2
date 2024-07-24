import "./styles/game-board.css";

export function FunctionalGameBoard({
  userInput,
  setUserInput,
  fishArray,
  setFishArray,
  correctAnswer,
  setCorrectAnswer,
  incorrectAnswer,
  setIncorrectAnswer,
  view,
}) {
  const nextFishToName = fishArray[0];

  const handleUserInput = () => {
    userInput.toLowerCase() === nextFishToName.name
      ? setCorrectAnswer((correctAnswer = correctAnswer + 1))
      : setIncorrectAnswer((incorrectAnswer = incorrectAnswer + 1));
    if (fishArray.length > 1) {
      const newFishArray = fishArray.filter((fish) => fish !== nextFishToName);

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
