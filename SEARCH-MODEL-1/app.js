const usercard = document.querySelector("[data-user-template]");
const usercardctn = document.querySelector("[data-user-cards-container]");
const searchinp = document.querySelector("[data-search]");
let users = [];
searchinp.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isvisi =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isvisi);
  });
});
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = usercard.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-header]");
      header.textContent = user.name;
      body.textContent = user.email;
      usercardctn.append(card);
      return { name: user.name, email: user.email, element: card };
      //   console.log(user);
    });
  });
  
