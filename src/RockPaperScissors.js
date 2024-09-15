import React, { useState } from 'react';
import rockImage from './image/Rock.png';
import paperImage from './image/paper.png';
import scissorsImage from './image/scissors.png';

import './RockPaperScissors.css'; 

const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const getResult = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) return 'tie';
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  }
  return 'lose';
};

const ChoiceIcon = ({ choice }) => {
    switch (choice) {
      case 'rock':
        return <img src={rockImage} alt="rock" className="choice-icon" />;
      case 'paper':
        return <img src={paperImage} alt="paper" className="choice-icon" />;
      case 'scissors':
        return <img src={scissorsImage} alt="scissors" className="choice-icon" />;
      default:
        return null;
    }
  };
  
  

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (choice) => {
    const computer = getComputerChoice();
    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(getResult(choice, computer));
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  if (!playerChoice) {
    return (
      <div className="container">
        <h2>Choose:</h2>
        <div className="choices">
          {choices.map((choice) => (
            <button key={choice} onClick={() => handleChoice(choice)} className="choice-button">
              <ChoiceIcon choice={choice} />
              <span>{choice}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className={`result ${result}`}>{result === 'win' ? 'YOU WIN!' : result === 'lose' ? 'YOU LOST!' : 'YOU TIED!'}</h2>
      <div className="choices">
        <div className="player-choice">
          <ChoiceIcon choice={playerChoice} />
          <p className="label">You</p>
        </div>
        
        <div className="computer-choice">
          <ChoiceIcon choice={computerChoice} />
          <p className="label">Computer</p>
        </div>
        
      </div>
      <button onClick={resetGame} className="play-again-button">
        Play Again
      </button>
    </div>
  );
}
