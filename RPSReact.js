import React, { Component } from "react";

class RockPaperScissors extends Component {
  constructor() {
    super();
    this.state = {
      userChoice: null,
      aiChoice: null,
      result: null,
      counting: 0
    };
  }

  choices = ["rock", "paper", "scissors"];

  generateAiChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return this.choices[randomIndex];
  };

  determineWinner = (userChoice, aiChoice) => {
    if (userChoice === aiChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && aiChoice === "scissors") ||
      (userChoice === "paper" && aiChoice === "rock") ||
      (userChoice === "scissors" && aiChoice === "paper")
    ) {
      return "You Won";
    } else {
      return "You Lost";
    }
  };

  handleChoice = (choice) => {
    const aiChoice = this.generateAiChoice();
    const result = this.determineWinner(choice, aiChoice);

    if (result === "You Won") {
      this.setState((prevState) => ({
        userChoice: choice,
        aiChoice: aiChoice,
        result: result,
        counting: prevState.counting + 1
      }));
    } else if (result === "You Lost") {
      this.setState((prevState) => ({
        userChoice: choice,
        aiChoice: aiChoice,
        result: result,
        counting: prevState.counting - 1
      }));
    } else {
      this.setState({
        userChoice: choice,
        computerChoice: aiChoice,
        result: result
      });
    }
  };

  render() {
    const { userChoice, aiChoice, result, counting } = this.state;

    return (
      <div>
        <h1>Rock, Paper, Scissors Game</h1>
        <div>
          <p> Count (W/L): {counting}</p>
          <button onClick={() => this.handleChoice("rock")}>
            <img class="Rock" src="img/Rock.png" alt="Rock" />{" "}
          </button>
          <button onClick={() => this.handleChoice("paper")}>
            <img class="Paper" src="img/Paper.png" alt="Paper" />
          </button>
          <button onClick={() => this.handleChoice("scissors")}>
            <img class="Scissors" src="img/Scissors.png" alt="Scissors" />
          </button>
        </div>
        {userChoice && aiChoice && (
          <div>
            <p>Your choice: {userChoice}</p>
            <p>AI's choice: {aiChoice}</p>
            <p>{result}</p>
          </div>
        )}
      </div>
    );
  }
}

export default RockPaperScissors;
