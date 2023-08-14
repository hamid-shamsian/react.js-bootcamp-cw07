const cells = document.querySelectorAll(".container div");
const modal = document.querySelector(".modal");

cells.forEach(cell => cell.addEventListener("click", userPlayGame));
document.querySelector(".overlay").addEventListener("click", resetGame);

const winningStates = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [1, 4, 7],
   [2, 5, 8],
   [3, 6, 9],
   [1, 5, 9],
   [3, 5, 7]
];

let wins = false;
const userSelections = [];
const robotSelections = [];

const circleHtml =
   '<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24"><path fill="#f2ebd3" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg>';
const crossHtml =
   '<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24"><path fill="none" stroke="#545454" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/></svg>';

function userPlayGame() {
   if (!this.children.length && !wins) {
      this.insertAdjacentHTML("afterbegin", circleHtml);
      userSelections.push(+this.dataset.number);
      judge("user");
      if (!wins) robotPlayGame();
   }
}

function judge(player) {
   for (const winningState of winningStates) {
      wins = true;
      for (let item of winningState) {
         if (!(player === "user" ? userSelections : robotSelections).includes(item)) {
            wins = false;
            break;
         }
      }
      if (wins) {
         console.log(`${player} wins.`);
         modal.innerHTML = `${player === "user" ? circleHtml : crossHtml} wins.`;
         modal.parentElement.classList.remove("hide");
         break;
      } else if (userSelections.length == 5) {
         modal.parentElement.classList.remove("hide");
         modal.innerHTML = "DRAW!";
      }
   }
}

function robotPlayGame() {
   let selection, selectedDiv;
   do {
      selection = Math.floor(Math.random() * 9) + 1;
      selectedDiv = document.querySelector(`.container div[data-number="${selection}"]`);
   } while (selectedDiv.children.length);

   selectedDiv.insertAdjacentHTML("afterbegin", crossHtml);
   robotSelections.push(selection);
   judge("robot");
}

function resetGame() {
   modal.parentElement.classList.add("hide");
   userSelections.length = robotSelections.length = 0;
   cells.forEach(cell => (cell.innerHTML = ""));
   wins = false;
}
