import "./settings.js";
import { exercises } from "./data/exercises.js";

const grid = document.querySelector(".exercise-grid");

exercises.forEach((exercise) => {
  const card = document.createElement("a");
  card.className = "card";
  card.href = `exercise.html?id=${exercise.id}`;

  card.innerHTML = `
    <h2 class="card__title">${exercise.id} ${exercise.title}</h2>
    <p class="card__description">${exercise.descriptionEn}</p>
  `;

  grid.appendChild(card);
});
