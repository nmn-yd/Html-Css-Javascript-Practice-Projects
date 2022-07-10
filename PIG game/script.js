alert("The Player Who Score 100 First Wins , Best Of Luck Both Of You");

//Variable for dice img
const dice = document.querySelector(".dice-img");

// variable for buttons
const roll_dice = document.querySelector(".roll-dice");
const new_game = document.querySelector(".new-game");
const hold_dice = document.querySelector(".hold");

let current_score = 0;
let active_player = 0;
let playing = true;

const total_p1 = document.querySelector(".player-1-total-score");
const total_p2 = document.querySelector(".player-2-total-score");

const player_1 = document.querySelector(".left");
const player_2 = document.querySelector(".right");
// roll dice button function

roll_dice.addEventListener("click", function () {
  if (playing) {
    const dice_number = Math.trunc(Math.random() * 6) + 1;
    console.log(dice_number);

    dice.classList.remove("hidden");
    dice.src = `dice-${dice_number}.png`;

    if (dice_number !== 1) {
      current_score += dice_number;
      document.getElementById(`player-${active_player}`).textContent =
        current_score;
    } else {
      document.getElementById(`player-${active_player}`).textContent = 0;
      current_score = 0;

      if (active_player === 0) {
        active_player = 1;
      } else if (active_player === 1) {
        active_player = 0;
      }

      player_1.classList.toggle("cover");
      player_2.classList.toggle("cover");
    }
  }
});

//functioning of hold button

hold_dice.addEventListener("click", function () {
  if (playing) {
    if (active_player === 0) {
      total_p1.textContent = Number(total_p1.textContent) + current_score;
      current_score = 0;
      document.getElementById(`player-${active_player}`).textContent =
        current_score;

      active_player = 1;
    } else if (active_player === 1) {
      total_p2.textContent = Number(total_p2.textContent) + current_score;
      current_score = 0;
      document.getElementById(`player-${active_player}`).textContent =
        current_score;
      active_player = 0;
    }

    player_1.classList.toggle("cover");
    player_2.classList.toggle("cover");

    if (Number(total_p1.textContent) >= 100) {
      dice.classList.add("hidden");
      playing = false;
      document.getElementById("container-1").style.backgroundColor = "#F4E06D";
      alert("🎉🎉Hurry Player 1 Wins");
    } else if (Number(total_p2.textContent) >= 100) {
      dice.classList.add("hidden");
      playing = false;
      document.getElementById("container-2").style.backgroundColor = "#F4E06D";
      alert("🎉🎉Hurry Player 2 Wins");
    }
  }
});

new_game.addEventListener("click", function () {
  total_p1.textContent = 0;
  total_p2.textContent = 0;
  document.querySelector(".player-1-current-score").textContent = 0;
  document.querySelector(".player-2-current-score").textContent = 0;
  document.getElementById("container-1").style.backgroundColor =
    " rgba(255, 255, 255, 0.7)";
  document.getElementById("container-2").style.backgroundColor =
    " rgba(255, 255, 255, 0.7)";
  player_2.classList.add("cover");
  player_1.classList.remove("cover");
  playing = true;
});
