# React + TypeScript + Vite
![Screenshot 2024-09-01 133240](https://github.com/user-attachments/assets/e768f630-deda-4976-b7df-a5486357c70f)
<br/>
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
<br/>
Currently, two official plugins are available:<br/>
<br/>
- [@vitejs/plugin-react]![Screenshot 2024-09-01 133255](https://github.com/user-attachments/assets/c8a1a909-7ec3-4221-a93d-85570ddcad06)
<br/>
<br/>
(https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
<br/><br/>
## Expanding the ESLint configuration
<br/>
If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:
<br/>
- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
