let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreCard();

  function playGame(playerMove) {
    const computerMove = computerPick();
    let result = '';

    if (playerMove === 'Rock') {
      if (computerMove === 'Rock') { result = 'Ties'; }
      else if (computerMove === 'Paper') { result = 'You Lose'; }
      else if (computerMove === 'Scissor') { result = 'You Win'; }
    }

    else if (playerMove === 'Paper') {
      if (computerMove === 'Rock') { result = 'You Win'; }
      else if (computerMove === 'Paper') { result = 'Ties'; }
      else if (computerMove === 'Scissor') { result = 'You Lose'; }

    }

    else if (playerMove === 'Scissor') {
      if (computerMove === 'Rock') { result = 'You Lose'; }
      else if (computerMove === 'Paper') { result = 'You Win'; }
      else if (computerMove === 'Scissor') { result = 'Ties'; }
    }

    if (result === 'You Win') { score.wins += 1 }
    else if (result === 'You Lose') { score.losses += 1 }
    else if (result === 'Ties') { score.ties += 1 }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreCard();
    document.querySelector(".status").innerHTML = `${result}`;
    document.querySelector(".playersMove").innerHTML = 
    `Your move:<img src="images/${playerMove}-emoji.png" alt="rock-emoji" class="disp-move-icon"> Computer move: <img src="images/${computerMove}-emoji.png" alt="rock-emoji" class="disp-move-icon">`;

    /* alert(`You Picked ${playerMove}. Computer picked ${computerMove}. ${result}
Your Wins: ${score.wins}  Your Losses: ${score.losses} Ties: ${score.ties}`); */
  }

  function updateScoreCard() {
    document.querySelector(".scorecard").innerHTML =
      `Your Wins: ${score.wins}  Your Losses: ${score.losses} Ties: ${score.ties}`;
  }


  function computerPick() {
    let computerMove = '';
    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) { computerMove = 'Rock'; }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) { computerMove = 'Paper'; }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) { computerMove = 'Scissor'; }
    return computerMove;
  }