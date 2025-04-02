<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
=======
🏁 Gran Turismo Panamá — Sim Racing Team Website

Welcome to the official website of Gran Turismo Panamá, a competitive sim racing team and simulator rental service based in Panama 🇵🇦.
This project showcases team information, driver gear, event images, and sim rig rental services — built as a learning and portfolio experience using React + TypeScript.

🚗 Features
🏎️ Hero Section – Custom background with branding

🧩 About Section – Team overview and mission

🧑‍💻 Drivers Section – Toggleable cards with driver gear + socials

🖼️ Gallery (Coming soon) – Showcase of live events and races

🎮 Simulator Rentals (Coming soon) – Info and contact form for booking

📱 Responsive Design – Mobile-first with clean layout

🎨 Custom Theme – Based on Gulf Racing colors:

Gulf Blue: #002776

Light Blue: #B8D9EB

Orange: #FE6218

White: #FEFEFE

🛠️ Tech Stack
⚛️ React (w/ Vite)

🧠 TypeScript

🎨 Custom CSS

📦 React Icons

🔁 useState / useEffect for UI interaction

🔗 Anchor-based navigation (single page)

>>>>>>> 97c0501dd352811f0eebdbbf76214992483372cd
