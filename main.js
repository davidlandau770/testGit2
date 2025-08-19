import { cardStorage } from "./data.js";

const container = document.getElementById("container");

const cardPrinting = () => {
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