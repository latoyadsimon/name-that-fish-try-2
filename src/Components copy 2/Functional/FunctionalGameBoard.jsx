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
  setView,
}) {
  let initialFishes = fishArray;

  const nextFishToName = initialFishes[0];

  const handleUserInput = () => {
    userInput === nextFishToName.name
      ? setCorrectAnswer((correctAnswer = correctAnswer + 1))
      : setIncorrectAnswer((incorrectAnswer = incorrectAnswer + 1));
    if (fishArray.length > 1) {
      let newArray = fishArray.filter((fish) => fish !== nextFishToName);

      setFishArray(newArray);
    } else {
      setView(true);
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
