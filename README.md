# practice-js

Practice project for Vanilla JavaScript exercises. Modern boilerplate for small web projects with HTML, CSS, and JavaScript. BEM structure, fast Rust-based tools, and quick local development.

## 📁 Folder Structure

```
practice-js/
├── src/
│   ├── index.html
│   ├── index.js
│   └── css/
│       ├── base.css      (reset, global typography)
│       └── style.css     (specific components)
└── .vscode/             (editor configuration)
```

## 📦 Dependencies

- **[servor](https://github.com/lukejacksonn/servor)**: Lightweight local server
- **[oxlint](https://oxc.rs/) & oxfmt**: Ultra-fast linter and formatter (Rust)
- **[stylelint](https://stylelint.io/)**: CSS linter with BEM and property sorting

## 🚀 Commands

| Command | Description |
|---------|------------|
| `pnpm dev` | Start local server (port 1234) |
| `pnpm lint` | Validate JS and CSS without changes |
| `pnpm lint:all` | Auto-format JS, CSS and sort properties |
| `pnpm lint:js:fix` | Auto-format only JavaScript |
| `pnpm lint:css:fix` | Auto-format only CSS |

## ⚙️ Configuration

- **CSS**: Property sorting by category (position → display → dimensions → typography → effects)
- **BEM**: Class naming validated with Stylelint
- **VS Code**: Auto-format on save

---

**Created for students and bootcampers to practice Vanilla JavaScript**
