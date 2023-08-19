(async function data() {
  const allData = await getData();
  allData.forEach((game) => {
    const gameItem = document.createElement("a");
    gameItem.href = `data.html?id=${game.id}`;
    const gameImg = document.createElement("img");
    gameImg.src = game.image;

    gameItem.append(gameImg);
    container.append(gameItem);
  });
})();
