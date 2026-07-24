const STORAGE_KEY_THEME = "theme";
const STORAGE_KEY_FONT_SIZE = "font-size";
const FONT_SIZE_STEP = 0.1;
const FONT_SIZE_MIN = 0.7;
const FONT_SIZE_MAX = 1.6;

function getTheme() {
  return localStorage.getItem(STORAGE_KEY_THEME) || "dark";
}

function getFontSize() {
  const stored = localStorage.getItem(STORAGE_KEY_FONT_SIZE);
  return stored ? Number.parseFloat(stored) : 1;
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY_THEME, theme);
}

function applyFontSize(size) {
  document.documentElement.style.setProperty("--font-scale", size);
  localStorage.setItem(STORAGE_KEY_FONT_SIZE, size);
}

function toggleTheme() {
  const current = getTheme();
  applyTheme(current === "dark" ? "light" : "dark");
  syncPrismTheme(document.documentElement.getAttribute("data-theme"));
}

function increaseFontSize() {
  const current = getFontSize();
  const next = Math.min(current + FONT_SIZE_STEP, FONT_SIZE_MAX);
  applyFontSize(next);
}

function decreaseFontSize() {
  const current = getFontSize();
  const next = Math.max(current - FONT_SIZE_STEP, FONT_SIZE_MIN);
  applyFontSize(next);
}

function syncPrismTheme(theme) {
  const lightLink = document.getElementById("prism-theme-light");
  if (lightLink) lightLink.disabled = theme === "dark";
}

function renderControls() {
  const wrapper = document.createElement("div");
  wrapper.className = "controls";
  wrapper.innerHTML = `
    <button class="controls__btn controls__btn--theme" title="Toggle theme">
      <span class="controls__icon controls__icon--sun">&#9788;</span>
      <span class="controls__icon controls__icon--moon">&#9790;</span>
    </button>
    <button class="controls__btn controls__btn--font-decrease" title="Decrease font size">A&minus;</button>
    <button class="controls__btn controls__btn--font-increase" title="Increase font size">A+</button>
  `;
  document.body.appendChild(wrapper);

  wrapper.querySelector(".controls__btn--theme").addEventListener("click", toggleTheme);
  wrapper
    .querySelector(".controls__btn--font-decrease")
    .addEventListener("click", decreaseFontSize);
  wrapper
    .querySelector(".controls__btn--font-increase")
    .addEventListener("click", increaseFontSize);
}

applyTheme(getTheme());
applyFontSize(getFontSize());
syncPrismTheme(getTheme());
renderControls();
