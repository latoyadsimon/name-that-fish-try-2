import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    userInput: "",
    fishArray: initialFishes,
  };

  // 1. Set up a function to set the state of **THIS** component
  setUserInput = (input) => {
    this.setState({ userInput: input });
  };
  setIncorrectCount = (input) => {
    this.setState({ incorrectCount: input });
  };
  setCorrectCount = (input) => {
    this.setState({ correctCount: input });
  };
  setFishArray = (input) => {
    this.setState({ fishArray: input });
  };

  // 2. pass the function that we created in step 1 , to our children that need it

  render() {
    const { incorrectCount, correctCount, userInput, fishArray } = this.state;

    const totalFishes = initialFishes.length;
    let view = false;

    if (incorrectCount + correctCount >= totalFishes) {
      view = true;
    }

    return (
      <>
        <>
          <ClassScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            fishArray={fishArray}
            view={view}
          />
          <ClassGameBoard
            userInput={userInput}
            setUserInput={this.setUserInput}
            correctCount={correctCount}
            setCorrectCount={this.setCorrectCount}
            incorrectCount={incorrectCount}
            setIncorrectCount={this.setIncorrectCount}
            fishArray={fishArray}
            setFishArray={this.setFishArray}
            view={view}
          />
        </>
        {view && (
          <ClassFinalScore
            correctCount={correctCount}
            totalFishes={totalFishes}
          />
        )}
      </>
    );
  }
}
