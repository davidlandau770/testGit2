import { cardStorage } from "./data.js";

const title = document.getElementById("title");
const search = document.getElementById("SearchInput")
const container = document.getElementById("container");

let searchInput = "";
search.addEventListener("input", (event) => {
    searchInput = search.value
    console.log(searchInput);
})

const cardPrinting = () => {
    const h1 = document.createElement("h1");
    title.appendChild(h1)
    h1.innerText = "cards"
    h1.classList = "h1"
    cardStorage.forEach(card => {
        createCard(card);
    });
}

const createCard = (card) => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    div.appendChild(h2);
    div.appendChild(p);
    container.appendChild(div);
    h2.innerText = card.title;
    p.innerText = card.definition;
    div.classList.add("card")
    p.classList.add("p")
}
cardPrinting()
