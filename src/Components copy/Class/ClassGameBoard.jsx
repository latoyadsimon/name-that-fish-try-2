import { Component } from "react";
import "./styles/game-board.css";
// import { Images } from "../../assets/Images";

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

export class ClassGameBoard extends Component {
  render() {
    // //
    //   state = {
    //     correctCount:0,
    //     incorrectCount:0
    //   }

    // //
    const {
      fishArray,
      userInput,
      correctCount,
      incorrectCount,
      view,
      setUserInput,
      setCorrectCount,
      setIncorrectCount,
      setView,
      setFishArray,
    } = this.props;

    const nextFishToName = fishArray[0];
    console.log("this is the fish:", nextFishToName);
    console.log("this is the fish url:", nextFishToName.url);

    const handleUserInput = () => {
      userInput === nextFishToName.name
        ? setCorrectCount(correctCount + 1)
        : setIncorrectCount(incorrectCount + 1);

      console.log("this is the score", correctCount, ", ", incorrectCount);

      if (fishArray.length > 1) {
        let newArray = fishArray.filter((fish) => fish !== nextFishToName);
        setFishArray(newArray);
      } else {
        setView(true);
      }
    };
    // const handleUserInput = () => {
    //   userInput === nextFishToName.name
    //     ? setCorrectCount({ correctCount: correctCount + 1 })
    //     : setIncorrectCount({ incorrectCount: incorrectCount + 1 });

    //   console.log("this is the score", correctCount, ", ", incorrectCount);

    //   if (fishArray.length > 1) {
    //     let newArray = fishArray.filter((fish) => fish !== nextFishToName);
    //     setFishArray({ fishArray: newArray });
    //   } else {
    //     setView({ view: true });
    //   }
    // };

    const onSubmit = (e) => {
      e.preventDefault();
      handleUserInput(userInput, nextFishToName);
      // setUserInput({ userInput: "" });
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
