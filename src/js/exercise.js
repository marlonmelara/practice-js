import "./settings.js";
import { exercises } from "./data/exercises.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const titleEl = document.querySelector(".exercise__title");
const statementEnEl = document.querySelector(".exercise__statement-en p");
const statementEsEl = document.querySelector(".exercise__statement-es p");
const codeEl = document.querySelector(".exercise__code");

if (!id) {
  titleEl.textContent = "Exercise not found";
} else {
  const exercise = exercises.find((e) => e.id === id);

  if (!exercise) {
    titleEl.textContent = "Exercise not found";
  } else {
    document.title = exercise.title;
    titleEl.textContent = exercise.title;
    statementEnEl.textContent = exercise.statementEn;
    statementEsEl.textContent = exercise.statementEs;

    fetch(exercise.file)
      .then((res) => res.text())
      .then((text) => {
        codeEl.textContent = text;
      });
  }
}
