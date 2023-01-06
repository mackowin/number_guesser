let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


const verifyHumanInput = human => {
  if(human < 0 || human > 9) {
    window.alert('Only 0-9 numbers are valid');
  }
}


const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (player, target) => {
  return absoluteDistance = Math.abs(player - target);
}

const compareGuesses = (human, computer, target) => {
  verifyHumanInput(human);
  if(getAbsoluteDistance(human, target) > getAbsoluteDistance(computer, target)) {
    return false;
  } else {
    return true;
  }
}

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;

//console.log(advanceRound());
//console.log(updateScore('human'));
//console.log(updateScore('computer'));
