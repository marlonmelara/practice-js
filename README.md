# practice-js

Practice project for Vanilla JavaScript exercises. Modern boilerplate for small web projects with HTML, CSS, and JavaScript. BEM structure, fast Rust-based tools, and quick local development.

## 📁 Folder Structure

```
practice-js/
├── src/
│   ├── index.html              (exercise card grid)
│   ├── exercise.html           (generic exercise detail page)
│   ├── css/
│   │   ├── base.css            (reset, themes, global typography)
│   │   └── style.css           (components: cards, controls, layout)
│   └── js/
│       ├── index.js            (renders exercise cards)
│       ├── exercise.js         (loads exercise detail + code)
│       ├── settings.js         (theme toggle, font size controls)
│       ├── data/
│       │   └── exercises.js    (exercise metadata: titles, statements)
│       └── exercises/
│           ├── 01-times-table.js
│           ├── 02-palindrome.js
│           ├── 03-word-finder.js
│           └── 04-reverse-characters.js
└── .vscode/                    (editor configuration)
```

## 📦 Dependencies

- **[servor](https://github.com/lukejacksonn/servor)**: Lightweight local server
- **[oxlint](https://oxc.rs/) & oxfmt**: Ultra-fast linter and formatter (Rust)
- **[stylelint](https://stylelint.io/)**: CSS linter with BEM and property sorting

## 🚀 Commands

| Command             | Description                             |
| ------------------- | --------------------------------------- |
| `pnpm dev`          | Start local server (port 1234)          |
| `pnpm lint`         | Validate JS and CSS without changes     |
| `pnpm lint:all`     | Auto-format JS, CSS and sort properties |
| `pnpm lint:js:fix`  | Auto-format only JavaScript             |
| `pnpm lint:css:fix` | Auto-format only CSS                    |

## ⚙️ Configuration

- **CSS**: Property sorting by category (position → display → dimensions → typography → effects)
- **BEM**: Class naming validated with Stylelint
- **VS Code**: Auto-format on save

---

**Created for students and bootcampers to practice Vanilla JavaScript**
