const container = document.querySelector(".container");

async function getData() {
  const url = "https://api.noroff.dev/api/v1/gamehub";

  const response = await fetch(url);
  const games = await response.json();
  return games;
}
