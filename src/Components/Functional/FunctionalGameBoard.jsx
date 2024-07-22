import "./styles/game-board.css";
// import { Images } from "../../assets/Images";

//state setter for correct and incorrect goes here

// const initialFishes = [
//   {
//     name: "trout",
//     url: Images.trout,
//   },
//   {
//     name: "salmon",
//     url: Images.salmon,
//   },
//   {
//     name: "tuna",
//     url: Images.tuna,
//   },
//   {
//     name: "shark",
//     url: Images.shark,
//   },
// ];

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
  //   let guessedFishes;

  const handleUserInput = () => {
    userInput === nextFishToName.name
      ? setCorrectAnswer((correctAnswer = correctAnswer + 1))
      : setIncorrectAnswer((incorrectAnswer = incorrectAnswer + 1));
    console.log(userInput === nextFishToName.name ? "correct!" : "incorrect!");
    console.log("this is correctAnswer: ", correctAnswer);
    console.log("this is incorrectAnswer: ", incorrectAnswer);
    if (fishArray.length > 1) {
      //   guessedFishes = fishArray.shift();
      //   console.log("this is how many guessed: ", guessedFishes);
      //   console.log("this is view now: ", view);
      // fishArray.shift();
      // setFishArray(fishArray);
      let newArray = fishArray.filter((fish) => fish !== nextFishToName);
      console.log("this is the new array:", newArray);
      setFishArray(newArray);
    } else {
      setView(true);
      console.log("this is view now: ", view);
    }
    console.log("initialFishes Length:", initialFishes.length);
    console.log("fishArray length:", fishArray.length);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("this is userInput: ", userInput);
    console.log("this is nextFishToName: ", nextFishToName);
    handleUserInput(userInput, nextFishToName);

    // fishArray.shift();
    // setFishArray(fishArray.shift());
    // console.log("new fishArray:", fishArray);
    setUserInput("");
  };

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
            // console.log("this is userInput:", userInput);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
