const getUserChoice = (userInput) => {
userInput = userInput.toLowerCase();
if (userInput==='rock' || userInput ==='paper'|| userInput==='scissors') {
    return userInput ;
  } else {
    return 'Error';
  }
}
const getComputerChoice = () => {
  let getNbr = Math.floor(Math.random()*2);
  if (getNbr === 0) {
    return 'rock';
  } else if (getNbr === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }

};



function determineWinner(getUserChoice, getcomputerChoice) 
{
   if (userChoice === getcomputerChoice)
      {
        return 'The game is a tie!';
      } // closing if tie clause!!!
   else if (getUserChoice === 'rock') 
     {
        if (getcomputerChoice === 'paper') 
          {
            return 'Computer Won!';
          }
        else 
          {
           return 'You won!';
          } 
      }
   else if (getUserChoice === 'scissors') 
     {
        if (getcomputerChoice === 'rock') 
         {
           return 'The Computer won!';
         } 
        else 
         {
           return 'You won!';
         }
      } 
   else if (getUserChoice === 'paper') 
     {
       if (getcomputerChoice === 'scissors') 
         {
           return 'The Computer won!';
         } 
       else 
         {
           return 'You won GREAT !';
         }
      }
}
const playGame = () => {
  const userChoice = userInput;
  const computerChoice = getComputerChoice();
  console.log(`userChoice: ${userChoice}  VS. computerChoice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));  
};

