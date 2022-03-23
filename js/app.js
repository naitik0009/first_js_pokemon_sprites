// alert("hey i have been integrated");

// const img = document.querySelector("img");

// for (let i = 1; i < 10; i++) {
//   setInterval(() => {
//     img.setAttribute(
//       "src",
//       `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i++}.png`
//     );
//   }, 3000);
// }

const container = document.querySelector("#container");
for (let i = 1; i < 150; i++) {
  const pokemon = document.createElement("div");
  //lets create a class pokemon for our div
  pokemon.classList.add("pokemon");
  const img = document.createElement("img");
  const index = document.createElement("span");
  index.innerText = `${i}`;
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  pokemon.appendChild(img);
  pokemon.appendChild(index);
  container.appendChild(pokemon);
}
