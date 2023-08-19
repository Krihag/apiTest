const gameContainer = document.querySelector(".game-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function displayData() {
  const data = await getData();
  const game = data.find((game) => game.id === id);
  console.log(game);

  const gameImg = document.createElement("img");
  gameImg.src = game.image;
  gameContainer.appendChild(gameImg);
}
displayData();
