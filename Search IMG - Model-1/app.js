const inp = document.querySelector(".search");
const arr = [
  { name: "Amethyst", img: "Axie-color/Amethyst.png" },
  { name: "Artic", img: "Axie-color/Artic.png" },
  { name: "Aurora", img: "Axie-color/Aurora.png" },
  { name: "Bloodmoon", img: "Axie-color/Bloodmoon.png" },
  { name: "Bubblegum", img: "Axie-color/Bubblegum.png" },
  { name: "Copper", img: "Axie-color/Copper.png" },
  { name: "Cream", img: "Axie-color/Cream.png" },
  { name: "Flamingo", img: "Axie-color/Flamingo.png" },
  { name: "Gloom", img: "Axie-color/Gloom.png" },
  { name: "Honey", img: "Axie-color/Honey.png" },
  { name: "Lavender", img: "Axie-color/Lavender.png" },
  { name: "Lilac", img: "Axie-color/Lilac.png" },
  { name: "Midnight", img: "Axie-color/Midnight.png" },
  { name: "Neptune", img: "Axie-color/Neptune.png" },
  { name: "Olive", img: "Axie-color/Olive.png" },
  { name: "Peanut", img: "Axie-color/Peanut.png" },
  { name: "Rose", img: "Axie-color/Rose.png" },
  { name: "Ruby", img: "Axie-color/Ruby.png" },
  { name: "Sapphire", img: "Axie-color/Sapphire.png" },
  { name: "ShadowAquatic", img: "Axie-color/ShadowAquatic.png" },
  { name: "ShadowBeast", img: "Axie-color/ShadowBeast.png" },
  { name: "ShadowBird", img: "Axie-color/ShadowBird.png" },
  { name: "ShadowBug", img: "Axie-color/ShadowBug.png" },
  { name: "ShadowDrawn", img: "Axie-color/ShadowDrawn.png" },
  { name: "ShadowDusk", img: "Axie-color/ShadowDusk.png" },
  { name: "ShadowMech", img: "Axie-color/ShadowMech.png" },
  { name: "ShadowPlant", img: "Axie-color/ShadowPlant.png" },
  { name: "ShadowReptile", img: "Axie-color/ShadowReptile.png" },
  { name: "Silver", img: "Axie-color/Silver.png" },
  { name: "Sky", img: "Axie-color/Sky.png" },
  { name: "Slime", img: "Axie-color/Slime.png" },
  { name: "Steel", img: "Axie-color/Steel.png" },
  { name: "Strawberry", img: "Axie-color/Strawberry.png" },
  { name: "Ube", img: "Axie-color/Ube.png" },
  { name: "Wasabi", img: "Axie-color/Wasabi.png" },
  { name: "WhiteAquatic", img: "Axie-color/WhiteAquatic.png" },
  { name: "WhiteBeast", img: "Axie-color/WhiteBeast.png" },
  { name: "WhiteBird", img: "Axie-color/WhiteBird.png" },
  { name: "WhiteBug", img: "Axie-color/WhiteBug.png" },
  { name: "WhiteDawn", img: "Axie-color/WhiteDawn.png" },
  { name: "WhiteDusk", img: "Axie-color/WhiteDusk.png" },
  { name: "WhiteMech", img: "Axie-color/WhiteMech.png" },
  { name: "WhitePlant", img: "Axie-color/WhitePlant.png" },
  { name: "Yolk", img: "Axie-color/Yolk.png" },
  { name: "WhiteReptile", img: "Axie-color/WhiteReptile.png" },
];
let html = ``;
arr.forEach((data) => {
  html += `
    <div class="box-product">
            <img src="${data.img}" alt="" class="img-main">
            <h1 class="name">${data.name}</h1>
        </div>
    `;
});
document.querySelector(".container").innerHTML = html;
const allbox = document.querySelectorAll(".box-product");
inp.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  allbox.forEach((data) => {
    const namex = data.querySelector(".name");
     namex.textContent.toLowerCase().includes(value)
      ? (data.style.display = "")
      : (data.style.display = "none");
  });
});
